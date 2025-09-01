import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { MovieService } from './application/movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MovieService) {}

  @Post()
  async create(
    @Body() movie: CreateMovieDto,
    @Query() query: { userId: string },
  ) {
    console.log('userIdcontroller', query.userId);
    return await this.moviesService.create(movie, query.userId);
  }

  @Get('/by-title/:title')
  findAll(@Param('title') title: string) {
    return this.moviesService.findAll(title);
  }

  @Get()
  findByName(@Query() query: { title: string }) {
    return this.moviesService.findByName(query.title);
  }

  @Get('/favoritas')
  findAllFav(@Query() query: { user: string }) {
    return this.moviesService.findAllFav(query.user);
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
