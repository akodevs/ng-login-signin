import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="page-wrap height-100 default-bg">
    <div class="app-error">
      <div class="fix">
        <mat-icon class="error-icon" color="warn">error</mat-icon>
        <div class="error-text">
          <h1 class="error-title">404</h1>
          <div class="error-subtitle">Page Not Found!</div>
        </div>
      </div>
      <div class="error-actions">
        <button
        mat-raised-button
        color="primary"
        class="mb-1"
        [routerLink]="['/dashboard']">Back to Dashboard</button>
        <button
        mat-raised-button
        color="warn">Report this Problem</button>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
