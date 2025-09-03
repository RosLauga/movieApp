import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Movie } from '../domain/entities/movie.entity';
import { MovieApi } from './movieApi.entity';

@Injectable()
export class MapperApiToMovie {
  mapperToMovie = (movie: MovieApi): Movie => {
    const mapMovie: Movie = {
      id: movie.imdbID,
      actors: movie.Actors,
      boxOffice: movie.BoxOffice,
      country: movie.Country,
      director: movie.Director,
      genre: movie.Genre,
      language: movie.Language,
      plot: movie.Plot,
      poster: movie.Poster,
      rated: movie.Rated,
      ratings: movie.Ratings,
      released: movie.Released,
      runtime: movie.Runtime,
      title: movie.Title,
      year: movie.Year,
      fav: false,
    };
    return mapMovie;
  };

  mapperToSearchMovies(movies: MovieApi[]): Movie[] {
    if (movies) {
      return movies.map(this.mapperToMovie);
    } else {
      throw new HttpException(
        'No se encontraron peliculas con ese titulo',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
