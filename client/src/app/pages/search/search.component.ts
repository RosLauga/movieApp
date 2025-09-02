import { Component, Input, inject, input, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpAxiosServices } from '@tools/services/http.services';
import { environment } from 'src/environment';
import { MovieCardComponent } from '@tools/movieCard/movie-card.component';
import { Movie } from './domain/movie.entity';

export interface ApiResponse {
  data: any[];
  statusCode: string;
  message: string;
}

@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MovieCardComponent,
  ],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  isLoading = signal<boolean>(false);
  movieList = signal<Movie[]>([]);
  private httpService = inject(HttpAxiosServices);

  async getMovies(title: string) {
    this.isLoading.update((x) => (x = !x));
    const response = await this.httpService.requestUrl<ApiResponse>(
      `${environment.apiUrl}/movies/by-title/${title}`
    );
    this.isLoading.update((x) => (x = !x));
    this.movieList.set(response.data);
  }
}
