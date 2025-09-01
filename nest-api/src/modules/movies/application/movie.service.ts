import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpApiServices } from 'src/globals/services/http.services';
import { Movie } from '../entities/movie.entity';
import { MapperApiToMovie } from '../infrastructure/mapper';
import { MovieApi } from '../infrastructure/movieApi.entity';
import { MovieDBRepository } from '../infrastructure/repository/movie.repository';
import { MovieFav } from '../entities/movieFav.entity';

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
  ) {}
  async findAll(title: string): Promise<Movie[]> {
    const url = `${process.env.OMDB_SEARCH_ALL!}${title}&${process.env.APIKEY!}`;
    const response = await this.httpService.requestUrl<MovieApiResponse>(url);
    return this.mapperService.mapperToSearchMovies(response.Search);
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
