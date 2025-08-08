import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { LeftMenu } from "../../components/menu/menu.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-dashboard",
  imports: [LeftMenu, RouterOutlet],
  templateUrl: "./dashboard.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
