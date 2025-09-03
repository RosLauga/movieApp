import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection, isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ROOT_REDUCER_MAP } from './core/store/app.states';
import { provideEffects } from '@ngrx/effects';
import { MovieEffects } from './components/movies/state/movie.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(ROOT_REDUCER_MAP),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(MovieEffects)
],
};
