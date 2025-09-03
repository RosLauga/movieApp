import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpApiServices } from 'src/globals/services/http.services';
import { MapperApiToMovie } from '../../infrastructure/mapper';
import { MovieApi } from '../../infrastructure/movieApi.entity';
import { MovieDBRepository } from '../../infrastructure/repository/movie.repository';
import { MovieFav } from '../entities/movieFav.entity';
import { FavouriteMovieService } from './favourite-movie.service';

export interface MovieApiResponse {
  Search: MovieApi[];
  totalResults: string;
  Response: string;
}

@Injectable()
export class MovieService {
  constructor(
    private readonly httpService: HttpApiServices,
    private mapperService: MapperApiToMovie,
    private readonly movieRepository: MovieDBRepository,
    private readonly favouriteMovieService: FavouriteMovieService,
  ) {}
  async findAll(title: string, userId: string) {
    const url = `${process.env.OMDB_SEARCH_ALL!}${title}&${process.env.APIKEY!}`;
    const response = await this.httpService.requestUrl<MovieApiResponse>(url);
    const dataMapped = this.mapperService.mapperToSearchMovies(response.Search);
    const parseMoviesToFav = await this.movieRepository.findAllFav(userId);
    const movieList = this.favouriteMovieService.getFavouriteMoviesFromUser(
      dataMapped,
      parseMoviesToFav,
    );
    return movieList;
  }

  async findByName(title: string) {
    const url = `${process.env.OMDB_SEARCH_BY_TITLE!}${title}&${process.env.APIKEY!}`;
    const response = await this.httpService.requestUrl<MovieApi>(url);
    return this.mapperService.mapperToMovie(response);
  }

  async create(movie: MovieFav, userId: string): Promise<MovieFav | undefined> {
    const checkMovie = await this.movieRepository.findById(movie, userId);
    console.log('Existe', checkMovie);
    if (!checkMovie) {
      const newMovie = await this.movieRepository.create(movie, userId);
      return newMovie;
    } else {
      throw new HttpException(
        `La película elegida ya está como favorita`,
        HttpStatus.CONFLICT,
      );
    }
  }

  async findAllFav(userId: string) {
    const allFavMovies = this.movieRepository.findAllFav(userId);
    return allFavMovies;
  }

  async FindAndDelete(userId: string, movieId: string): Promise<MovieFav> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const deleteMovie = await this.movieRepository.delete(userId, movieId);
    return deleteMovie;
  }
}
