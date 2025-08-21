import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class HttpApiServices {
  constructor(private readonly httpService: HttpService) {}

  async requestUrl<T>(url: string): Promise<T> {
    try {
      const response$ = this.httpService.get<T>(url).pipe(
        map((res) => {
          return res.data;
        }),
      );
      return await firstValueFrom(response$);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
