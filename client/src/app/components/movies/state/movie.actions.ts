import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/pages/search/domain/movie.entity';

export const getMovieList = createAction(
  '[Movie List] Search movies',
  props<{ title: string }>()
);

export const loadMovies = createAction(
  '[Movie List] Movies loaded',
  props<{ movies: Movie[] }>()
);
