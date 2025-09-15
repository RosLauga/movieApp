import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMessageComponent } from './snackbar-message.component';

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  openSnackBar(err: string) {
    this._snackBar.openFromComponent(SnackbarMessageComponent, {
      duration: this.durationInSeconds * 1000,
      data: { errorMessage: err }, // 👈 Pasamos el dato
    });
  }
}
