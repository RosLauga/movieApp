import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpAxiosServices } from '@tools/services/http.services';
import { Movie } from 'src/app/pages/search/domain/movie.entity';
import { environment } from 'src/environment';
import { FavButtonComponent } from "./fav-button-component/fav-button.component";
import { Store } from '@ngrx/store';
import { setMovieFav } from 'src/app/components/movies/state/movie.actions';

@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, FavButtonComponent],
  templateUrl: './movie-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {

  @Input() movie: Movie | undefined;

}
