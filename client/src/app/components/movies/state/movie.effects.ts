import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  errorMessage,
  getMovie,
  getMovieList,
  loadedMovies,
  loadedMovieSuccess,
  setMovieFav,
  setMovieFavSuccess,
  unsetMovieFav,
  unsetMovieFavSuccess,
} from "./movie.actions";
import { inject, Injectable } from "@angular/core";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ApiResponse, HttpAxiosServices } from "@tools/services/http.services";
import { environment } from "src/environment";
import { Movie } from "src/app/pages/search/domain/movie.entity";

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions);
  private httpService = inject(HttpAxiosServices);

  loadMoviesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getMovieList),
      exhaustMap(({ title }) =>
        this.httpService
          .requestUrl<ApiResponse>(
            `${environment.apiUrl}/movies/by-title?title=${title}&userId=62805d41-fb42-4330-8a5c-d07a6e2fabae`,
          )
          .pipe(
            map((res) => {
              return loadedMovies({ movies: res.data });
            }),
          ),
      ),
    );
  });

  setMovieAsFavourite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setMovieFav),
      exhaustMap(({ id }) =>
        this.httpService
          .postUrl<Movie>(
            `${environment.apiUrl}/movies/favoritas?movieId=${id}&userId=62805d41-fb42-4330-8a5c-d07a6e2fabae`,
          )
          .pipe(
            map((res) => setMovieFavSuccess()),
            catchError(async () => errorMessage()),
          ),
      ),
    );
  });

  unsetMovieAsFavourite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(unsetMovieFav),
      exhaustMap(({ id }) =>
        this.httpService
          .delete<ApiResponse>(
            `${environment.apiUrl}/movies/favoritas?movieId=${id}&userId=62805d41-fb42-4330-8a5c-d07a6e2fabae`,
          )
          .pipe(
            map((res) => unsetMovieFavSuccess()),
            catchError(async () => errorMessage()),
          ),
      ),
    );
  });

  loadMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getMovie),
      exhaustMap(({ id }) =>
        this.httpService.requestUrl<ApiResponse>(
          `${environment.apiUrl}/movies/by-id?movieId=${id}`,
        ).pipe(
          map((res) => loadedMovieSuccess({movie: res.data})),
          catchError(async() => errorMessage())
        ),
      ),
    );
  });
}
