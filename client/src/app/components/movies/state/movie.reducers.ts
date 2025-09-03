import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/pages/search/domain/movie.entity';
import { getMovieList, loadedMovies, setMovieFav } from './movie.actions';
import { MovieStates } from './movie.states';

export const initialState: MovieStates = { movies: [], isLoading: false };


export const listMovieReducer = createReducer(
  initialState,
  on(getMovieList, (state, {}) => {
    return {
      ...state,      
      isLoading: true,
    };
  }),
  on(loadedMovies, (state, payload) => {
    return {
      ...state,
      movies: payload.movies,
      isLoading: false
    }
  }),
  on(setMovieFav, (state, payload) => {
    return {
      ...state,
      movies: state.movies.map((x) => {
        if(x.id === payload.movie.id){
          return {...x,fav: true}
        } else {
          return x
        }
      })
    }
  })
);
