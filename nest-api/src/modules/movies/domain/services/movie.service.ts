import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpApiServices } from 'src/globals/services/http.services';
import { MapperApiToMovie } from '../../infrastructure/mapper';
import { MovieApi } from '../../infrastructure/movieApi.entity';
import { MovieDBRepository } from '../../infrastructure/repository/movie.repository';
import { Movie } from '../entities/movie.entity';
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

  async findById(id: string): Promise<Movie> {
    const url = `${process.env.OMDB_SEARCH_BY_ID!}${id}&${process.env.APIKEY!}`;
    const response = await this.httpService.requestUrl<MovieApi>(url);
    return this.mapperService.mapperToMovie(response);
  }

  async create(id: string, userId: string): Promise<Movie | undefined> {
    const checkMovie = await this.movieRepository.findById(id, userId);
    if (!checkMovie) {
      const findMovie = await this.findById(id);
      const newMovie = await this.movieRepository.create(findMovie, userId);
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

  async FindAndDelete(userId: string, movieId: string): Promise<Movie> {
    const deleteMovie = await this.movieRepository.delete(userId, movieId);
    return deleteMovie;
  }
}
