import { createReducer, on } from '@ngrx/store';
import { getMovieList, loadedMovies, setMovieFav, unsetMovieFav, unsetMovieFavSuccess } from './movie.actions';
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
        if(x.id === payload.id){
          return {...x,fav: true}
        } else {
          return x
        }
      })
    }
  }),
  on(unsetMovieFav, (state, payload) => {
    return {
      ...state,
      movies: state.movies.map((m) => {
        if(m.id === payload.id) {
          return {...m, fav: false}
        } else {
          return m
        }
      })
    }
  }),
);
