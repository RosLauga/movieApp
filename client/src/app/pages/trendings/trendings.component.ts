import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CardData, GifCardComponent } from "@tools/gifCard/gifCard.component";

@Component({
  selector: "app-trendings",
  imports: [GifCardComponent],
  templateUrl: "./trendings.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingsComponent {
  public cardList: CardData[] = [
    {
      title: "First Gif",
      subtitle: "The First gif",
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      thumbnails:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      description: "A description",
    },
    {
      title: "Second Gif",
      subtitle: "The Second gif",
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      thumbnails:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      description: "A description",
    },
    {
      title: "Third Gif",
      subtitle: "The Third gif",
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      thumbnails:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      description: "A description",
    },
  ];
}
