import { Injectable } from '@nestjs/common';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class FavouriteMovieService {
  assignFavToList(favMovie: Movie[], movie: Movie) {
    const fav = favMovie.find((m) => m.id === movie.id);
    if (fav) {
      return { ...movie, fav: true };
    } else {
      return movie;
    }
  }

  getFavouriteMoviesFromUser(movies: Movie[], movieFavs: Movie[]) {
    const favMovies = movies.map((m) => this.assignFavToList(movieFavs, m));
    console.log('movie', favMovies);
    return favMovies;
  }
}
