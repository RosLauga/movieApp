import { Injectable } from '@nestjs/common';
import { Movie } from '../entities/movie.entity';
import { MovieApi } from './movieApi.entity';

@Injectable()
export class MapperApiToMovie {
  mapperToMovie(movie: MovieApi): Movie {
    const mapMovie: Movie = {
      Actors: movie.Actors,
      BoxOffice: movie.BoxOffice,
      Country: movie.Country,
      Director: movie.Director,
      Genre: movie.Genre,
      Language: movie.Language,
      Plot: movie.Plot,
      Poster: movie.Poster,
      Rated: movie.Rated,
      Ratings: movie.Ratings,
      Released: movie.Released,
      Runtime: movie.Runtime,
      Title: movie.Title,
      Year: movie.Year,
    };
    return mapMovie;
  }

  mapperToSearchMovies(movies: MovieApi[]): Movie[] {
    return movies.map(this.mapperToMovie);
  }
}
