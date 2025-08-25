import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Movie } from 'src/app/pages/search/domain/movie.entity';

@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './movieCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;
}
