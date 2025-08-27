import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Movie } from 'src/app/pages/search/domain/movie.entity';

@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;
}
