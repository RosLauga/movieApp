import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-message',
  standalone: true,
  template: `<p>{{ data.errorMessage }}</p>`,
})
export class SnackbarMessageComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { errorMessage: string },
  ) {}
}
