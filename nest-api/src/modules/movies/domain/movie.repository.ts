import { Movie } from './entities/movie.entity';

export interface MovieRepository {
  create(movie: Movie, userId: string): Promise<Movie>;
  findById(id: string, userId: string): Promise<Movie | null>;
  findAllFav(id: string): Promise<Movie[] | []>;
  delete(userId: string, movieId: string);
}
