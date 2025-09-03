import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Movie } from 'src/app/pages/search/domain/movie.entity';
import { FavButtonComponent } from "./fav-button-component/fav-button.component";

@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, FavButtonComponent],
  templateUrl: './movie-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {

  @Input() movie: Movie | undefined;

}
