import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/pages/search/domain/movie.entity';
import { getMovieList } from './movie.actions';
import { MovieStates } from './movie.states';

export const initialState: MovieStates = { movies: [], isLoading: false };


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
