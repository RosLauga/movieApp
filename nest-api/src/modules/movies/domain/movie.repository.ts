import { Movie } from '../entities/movie.entity';

export interface MovieRepository {
  findByName(title: string);
  findAll(title: string): Promise<Movie[] | []>;
}
