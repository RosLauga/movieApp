import { Component, Input, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "app-fav-button",
    templateUrl: "./fav-button.component.html",
    imports: [MatIconModule]
})

export class FavButtonComponent {

@Input()
favState = false;   

}
