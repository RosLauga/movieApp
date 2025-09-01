import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MovieService } from './application/movie.service';
import { HttpApiServices } from 'src/globals/services/http.services';
import { HttpModule } from '@nestjs/axios';
import { MapperApiToMovie } from './infrastructure/mapper';
import { PrismaService } from 'src/globals/services/prisma.service';
import { MovieDBRepository } from './infrastructure/repository/movie.repository';

@Module({
  controllers: [MoviesController],
  providers: [
    MovieService,
    HttpApiServices,
    MapperApiToMovie,
    PrismaService,
    MovieDBRepository,
  ],
  imports: [HttpModule],
})
export class MoviesModule {}
