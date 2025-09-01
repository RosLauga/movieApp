import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MovieRepository } from '../../domain/movie.repository';
import { PrismaService } from 'src/globals/services/prisma.service';
import { MovieFav } from '../../entities/movieFav.entity';

@Injectable({})
export class MovieDBRepository implements MovieRepository {
  constructor(private readonly repositoryService: PrismaService) {}

  async create(movie: MovieFav, userId: string): Promise<MovieFav> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const movieExist = await this.repositoryService.movie.findFirst({
      where: {
        id: movie.id,
        userId,
      },
    });
    return movieExist;
  }

  async findAllFav(userId: string): Promise<MovieFav[] | []> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const allFavs = await this.repositoryService.movie.findMany({
      where: { userId },
    });
    return allFavs;
  }

  async delete(userId: string, movieId: string): Promise<MovieFav> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
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
