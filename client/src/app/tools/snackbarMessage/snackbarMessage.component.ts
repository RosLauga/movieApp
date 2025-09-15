import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injectable,
  signal,
  Input,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-message',
  imports: [],
  template: `<p>{{ errorMessage }}</p>`,
  styleUrl: './snackbarMessage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarMessageComponent {
  @Input()
  errorMessage = '';
}

@Injectable()
export class snackBarService extends SnackbarMessageComponent {
  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  openSnackBar(err: string) {
    this.errorMessage = err;
    this._snackBar.openFromComponent(SnackbarMessageComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
