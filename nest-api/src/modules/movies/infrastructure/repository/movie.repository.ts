import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MovieRepository } from '../../domain/movie.repository';
import { PrismaService } from 'src/globals/services/prisma.service';
import { MovieFav } from '../../domain/entities/movieFav.entity';

@Injectable({})
export class MovieDBRepository implements MovieRepository {
  constructor(private readonly repositoryService: PrismaService) {}

  async create(movie: MovieFav, userId: string): Promise<MovieFav> {
    try {
      const newMovie = await this.repositoryService.movie.create({
        data: {
          ...movie,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return newMovie;
    } catch (error) {
      console.log('Movie', error);
      throw new HttpException(error, HttpStatus.BAD_GATEWAY);
    }
  }

  async findById(movie: MovieFav, userId: string): Promise<MovieFav | null> {
    console.log('Movie', movie);
    const movieExist = await this.repositoryService.movie.findUnique({
      where: {
        id_userId: {
          id: movie.id,
          userId,
        },
      },
    });
    return movieExist;
  }

  async findAllFav(userId: string): Promise<MovieFav[] | []> {
    const allFavs = await this.repositoryService.movie.findMany({
      where: { userId },
    });
    return allFavs;
  }

  async delete(userId: string, movieId: string): Promise<MovieFav> {
    try {
      const deleteMovie = this.repositoryService.movie.delete({
        where: {
          id_userId: {
            id: movieId,
            userId,
          },
        },
      });
      return deleteMovie;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_GATEWAY);
    }
  }
}
