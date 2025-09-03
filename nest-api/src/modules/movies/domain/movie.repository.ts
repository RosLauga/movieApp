import { MovieFav } from './entities/movieFav.entity';

export interface MovieRepository {
  create(movie: MovieFav, userId: string): Promise<MovieFav>;
  findById(movie: MovieFav, userId: string): Promise<MovieFav | null>;
  findAllFav(id: string): Promise<MovieFav[] | []>;
  delete(userId: string, movieId: string);
}
