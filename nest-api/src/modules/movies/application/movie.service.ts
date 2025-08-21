import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../domain/movie.repository';
import { HttpApiServices } from 'src/globals/services/http.services';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class MovieService implements MovieRepository {
  constructor(private readonly httpService: HttpApiServices) {}
  async findAll(title: string) {
    const url = `${process.env.OMDB_SEARCH_ALL!}${title}&${process.env.APIKEY!}`;
    const response = await this.httpService.requestUrl<Movie[]>(url);
    return response;
  }

  async findByName(title: string): Promise<Movie | null> {
    const url = `${process.env.OMDB_SEARCH_BY_TITLE!}${title}&${process.env.APIKEY!}`;
    const response = this.httpService.requestUrl<Movie>(url);
    console.log('By Title', response);
    return response;
  }
}
