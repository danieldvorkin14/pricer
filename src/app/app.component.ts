import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pricer';

  events: string[] = [];
  opened: boolean;

  tiles: Tile[] = [
    {text: 'Header', cols: 4, rows: 1, color: 'transparent'},
    {text: 'Content Section', cols: 4, rows: 4, color: 'silver'},
  ];
}
