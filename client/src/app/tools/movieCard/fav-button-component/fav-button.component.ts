import { Component, inject, Input, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { Store } from "@ngrx/store";
import { setMovieFav } from "src/app/components/movies/state/movie.actions";
import { Movie } from "src/app/pages/search/domain/movie.entity";

@Component({
    selector: "app-fav-button",
    styleUrl: './fav-button.component.css',
    templateUrl: "./fav-button.component.html",
    imports: [MatIconModule]
})

export class FavButtonComponent {

@Input()
favState?: Movie;   

private store = inject(Store)

setFav(id: string | undefined) {
    console.log("Movie to Favourite", id)
    if(id) this.store.dispatch(setMovieFav({id}))
}


}
