import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MovieService } from './domain/services/movie.service';
import { HttpApiServices } from 'src/globals/services/http.services';
import { HttpModule } from '@nestjs/axios';
import { MapperApiToMovie } from './infrastructure/mapper';
import { PrismaService } from 'src/globals/services/prisma.service';
import { MovieDBRepository } from './infrastructure/repository/movie.repository';
import { FavouriteMovieService } from './domain/services/favourite-movie.service';

@Module({
  controllers: [MoviesController],
  providers: [
    MovieService,
    HttpApiServices,
    MapperApiToMovie,
    PrismaService,
    MovieDBRepository,
    FavouriteMovieService,
  ],
  imports: [HttpModule],
})
export class MoviesModule {}
