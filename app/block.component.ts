import { Component, Input } from '@angular/core';
import {BlockViewModel} from './blockviewmodel';

@Component({
  selector: 'minesweeper-block',
  template: `
    <div class='block' [class.opened]="block.IsOpen == true" [class.closed]="block.IsOpen == false">
      <span style="vertical-align">X</span>
    </div>`,
    styles: [`
    .block {
      width:50px;
      height:50px;
      line-height:50px;
      padding:0px;
      margin:0px;
      border-color: black;
      border: 1px;
    }`,
    `
    .opened {
      color:black;
      background-color:red;
    }`,
    `
    .closed {
      color: white;
      background-color: gray;
    }
    `]
})
export class BlockComponent
{
  @Input()
  block: BlockViewModel;
}
