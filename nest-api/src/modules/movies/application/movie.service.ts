import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../domain/movie.repository';
import { HttpApiServices } from 'src/globals/services/http.services';
import { Movie } from '../entities/movie.entity';
import { MapperApiToMovie } from '../infrastructure/mapper';
import { MovieApi } from '../infrastructure/movieApi.entity';

export interface MovieApiResponse {
  Search: MovieApi[];
  totalResults: string;
  Response: string;
}

@Injectable()
export class MovieService implements MovieRepository {
  constructor(
    private readonly httpService: HttpApiServices,
    private mapperService: MapperApiToMovie,
  ) {}
  async findAll(title: string): Promise<Movie[]> {
    const url = `${process.env.OMDB_SEARCH_ALL!}${title}&${process.env.APIKEY!}`;
    const response = await this.httpService.requestUrl<MovieApiResponse>(url);
    return this.mapperService.mapperToSearchMovies(response.Search);
  }

  async findByName(title: string) {
    const url = `${process.env.OMDB_SEARCH_BY_TITLE!}${title}&${process.env.APIKEY!}`;
    const response = await this.httpService.requestUrl<MovieApi>(url);
    console.log('Movies', response);
    return this.mapperService.mapperToMovie(response);
  }
}
