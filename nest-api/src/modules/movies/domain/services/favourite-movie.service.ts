import { Injectable } from '@nestjs/common';
import { MovieFav } from '../entities/movieFav.entity';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class FavouriteMovieService {
  assignFavToList(favMovie: MovieFav[], movie: Movie) {
    const fav = favMovie.find((m) => m.id === movie.id);
    if (fav) {
      return { ...movie, fav: true };
    } else {
      return movie;
    }
  }

  getFavouriteMoviesFromUser(movies: Movie[], movieFavs: MovieFav[]) {
    const favMovies = movies.map((m) => this.assignFavToList(movieFavs, m));
    console.log('movie', favMovies);
    return favMovies;
  }
}
