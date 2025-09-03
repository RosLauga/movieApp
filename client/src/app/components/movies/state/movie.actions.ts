import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/pages/search/domain/movie.entity';


// Search bye title
export const getMovieList = createAction(
  '[Movie List] Search movies',
  props<{ title: string }>()
);

// Load movies to the list
export const loadedMovies = createAction(
  '[Movie List] Movies loaded' ,
  props<{ movies: Movie[]}>()
);

export const setMovieFav = createAction(
  '[Movie List] Addding Movie as Favourite' ,
  props<{movie: Movie}>()
)

export const setMovieFavSuccess = createAction(
  '[Movie List] Movie added as favourite'  
)

export const errorMessage = createAction(
  '[Movie List] Error during the requests'  
)
