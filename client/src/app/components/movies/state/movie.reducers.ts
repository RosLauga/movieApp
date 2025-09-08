import { createReducer, on } from "@ngrx/store";
import {
  getMovieList,
  loadedMovies,
  loadedMovieSuccess,
  setMovieFav,
  unsetMovieFav,
} from "./movie.actions";
import { MovieStates } from "./movie.states";

export const initialState: MovieStates = {
  movies: [],
  isLoading: false,
  movie: null,
};

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
      isLoading: false,
    };
  }),
  on(setMovieFav, (state, payload) => {
    return {
      ...state,
      movies: state.movies.map((x) => {
        if (x.id === payload.id) {
          return { ...x, fav: true };
        } else {
          return x;
        }
      }),
    };
  }),
  on(unsetMovieFav, (state, payload) => {
    return {
      ...state,
      movies: state.movies.map((m) => {
        if (m.id === payload.id) {
          return { ...m, fav: false };
        } else {
          return m;
        }
      }),
    };
  }),
  on(loadedMovieSuccess, (state, payload) => {
    return {
      ...state,
      movie: {...payload.movie,fav: true},
    };
  }),
);
