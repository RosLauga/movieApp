import {
  Controller,
  Get,
  Param,
  Query,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { MovieService } from './application/movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MovieService) {}

  // @Post()
  // create(@Body() createMovieDto: CreateMovieDto) {
  //   return this.moviesService.create(createMovieDto);
  // }

  @Get(':title')
  findAll(@Param('title') title: string) {
    return this.moviesService.findAll(title);
  }

  @Get()
  findByName(@Query() query: { title: string }) {
    return this.moviesService.findByName(query.title);
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
