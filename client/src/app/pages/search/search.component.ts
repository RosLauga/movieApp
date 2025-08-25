import { Component, Input, inject, input, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpAxiosServices } from '@tools/services/http.services';
import { environment } from 'src/environment';

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
  ],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  isLoading = signal<boolean>(false);
  private httpService = inject(HttpAxiosServices);

  async getMovies(title: string) {
    this.isLoading.update((x) => (x = !x));
    const request = await this.httpService.requestUrl<ApiResponse>(
      `${environment.apiUrl}/movies/${title}`
    );
    this.isLoading.update((x) => (x = !x));
    console.log('Requests', request.data);
  }
}
