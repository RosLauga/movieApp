import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom, map, Observable, of } from 'rxjs';

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

  requestUrl<T>(url: string): Observable<T> {
    try {
      return this.service.get<T>(url)       
    } catch (error) {
      throw new Error('Error');
    }
  }

  postUrl<T>(url: string, body?: T) {
    try {
      return this.service.post<T>(url, body)        
    } catch (error) {
      throw new Error('Error');
    }
  }
}
