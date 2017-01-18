import { Component } from '@angular/core';
import {Field} from './field';

@Component({
  selector: 'my-app',
  template: 
    `<h1>Minesweeper - Angular</h1>
    <p>This is me experimenting with Angular 2.</p>
    <div>
      <a class="btn btn-primary" (click)="onStartNewGameClicked()">Start new game</a>
    </div>
    <new-game *ngIf="isStartingNewGame==true"></new-game>
    <minesweeper-field *ngIf="isStartingNewGame==false"></minesweeper-field>
    
    `,
})
export class AppComponent
{
  constructor() {
    this.isStartingNewGame = false;
  }

  isStartingNewGame: boolean;

  onStartNewGameClicked() : void {
    this.isStartingNewGame = true;
  }

}
