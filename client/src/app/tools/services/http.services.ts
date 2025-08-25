import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

export interface ApiResponse {
  data: any[];
  statusCode: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpAxiosServices {
  private service = inject(HttpClient);

  async requestUrl<T>(url: string): Promise<T> {
    try {
      const response$ = this.service.get<T>(url).pipe(
        map((res) => {
          return res;
        })
      );
      return await firstValueFrom(response$);
    } catch (error) {
      throw new Error('Error');
    }
  }
}
