import { Component, inject, OnInit, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { getMovie } from "./state/movie.actions";
import { CommonModule } from "@angular/common";
import { getMovieSelector } from "./state/movie.selectors";
import { MatCardModule } from "@angular/material/card";
import { FavButtonComponent } from "@tools/movieCard/fav-button-component/fav-button.component";

@Component({
  selector: "app-movie-component",
  templateUrl: "./movie.component.html",
  imports: [CommonModule, MatCardModule, FavButtonComponent],
})
export class MovieComponent implements OnInit {
  store = inject(Store);
  route = inject(ActivatedRoute);
  movieName = signal("");
  movie$ = this.store.select(getMovieSelector);

  ngOnInit() {
    this.movieName.set(this.route.snapshot.paramMap.get("movieId") ?? "");
    this.store.dispatch(getMovie({id: this.movieName()}))
  }
}
