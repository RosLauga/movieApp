import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { MovieService } from './domain/services/movie.service';
import { CreateMovieDto } from './application/dto/create-movie.dto';
import { MovieFav } from './domain/entities/movieFav.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MovieService) {}

  @Post()
  async create(
    @Body() movie: CreateMovieDto,
    @Query() query: { userId: string },
  ) {
    return await this.moviesService.create(movie, query.userId);
  }

  @Get('/by-title')
  findAll(@Query() query: { title: string; userId: string }) {
    return this.moviesService.findAll(query.title, query.userId);
  }

  @Get()
  findByName(@Query() query: { title: string }) {
    return this.moviesService.findByName(query.title);
  }

  @Get('/favoritas')
  findAllFav(@Query() query: { user: string }) {
    return this.moviesService.findAllFav(query.user);
  }

  @Post('/favoritas')
  createFavourite(
    @Body() body: CreateMovieDto,
    @Query() query: { userId: string },
  ) {
    console.log('Post', body);
    return this.moviesService.create(body, query.userId);
  }

  @Delete('/favoritas')
  findAndDelete(@Query() query: { userId: string; movieId: string }) {
    return this.moviesService.FindAndDelete(query.userId, query.movieId);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
  //   return this.moviesService.update(+id, updateMovieDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.moviesService.remove(+id);
  // }
}
