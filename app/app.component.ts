import { Component } from '@angular/core';
import {Field} from './field';

@Component({
  selector: 'my-app',
  template: `<h1>Minesweeper - Angular</h1>
             <minesweeper-field></minesweeper-field>`,
})
export class AppComponent
{
}
