import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { MovieService } from './domain/services/movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MovieService) {}

  @Get('/by-title')
  findAll(@Query() query: { title: string; userId: string }) {
    return this.moviesService.findAll(query.title, query.userId);
  }

  @Get('/by-id')
  findById(@Query() query: { movieId: string }) {
    return this.moviesService.findById(query.movieId);
  }

  @Get('/favoritas')
  findAllFav(@Query() query: { user: string }) {
    return this.moviesService.findAllFav(query.user);
  }

  @Post('/favoritas')
  createFavourite(@Query() query: { movieId: string; userId: string }) {
    return this.moviesService.create(query.movieId, query.userId);
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
