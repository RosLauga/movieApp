import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MovieService } from './application/movie.service';
import { HttpApiServices } from 'src/globals/services/http.services';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [MoviesController],
  providers: [MovieService, HttpApiServices],
  imports: [HttpModule],
})
export class MoviesModule {}
