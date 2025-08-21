import { Movie } from '../entities/movie.entity';

export interface MovieRepository {
  findByName(title: string): Promise<Movie | null>;
  findAll(title: string): Promise<Movie[] | []>;
}
