import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/pages/search/domain/movie.entity';
import { getMovieList } from './movie.actions';

export const initialState: {
  movies: Movie[];
  isLoading: boolean;
} = { movies: [], isLoading: false };

export const listMovieReducer = createReducer(
  initialState,
  on(getMovieList, (state, {}) => {
    return {
      ...state,
      movies: [],
      isLoading: true,
    };
  })
);
