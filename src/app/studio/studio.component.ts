import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-studio',
  styles: [
    `.active-link {
      font-weight: bold;
      border-bottom: 2px solid #005005;
    }`,
  ],
  template: `
    <mat-toolbar color="accent" fxLayoutGap="8px">
      <a mat-button routerLink="/studio/home" routerLinkActive="active-link">Studio's Dashboard</a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class StudioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
