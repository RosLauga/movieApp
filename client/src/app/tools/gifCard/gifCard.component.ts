import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

export interface CardData {
  title: string;
  img: string;
  description: string;
  subtitle?: string;
  thumbnails?: string;
}

@Component({
  selector: "app-gif-card",
  imports: [MatCardModule, MatButtonModule],
  templateUrl: "./gifCard.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifCardComponent {
  @Input() card: CardData | undefined;

  constructor() {
    console.log("Data", this.card);
  }
}
