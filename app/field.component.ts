import { Component } from '@angular/core';
import { Field, GameStatus } from './field';
import { BlockViewModel, RowOfBlocksViewModel } from './blockviewmodel';

@Component({
  selector: 'minesweeper-field',
  template: `
    <h2>The Minesweeper Field</h2>

    <table>
      <tr *ngFor="let row of buildRowsOfBlocks();">
        <th *ngFor="let block of row.Blocks">
          <minesweeper-block [block]="block" (click)="onClick(block)"></minesweeper-block>
        </th>
      </tr>
    </table>    

    <p>end of table</p>
  `,
})
export class FieldComponent
{
  constructor() {
    this.init(10,10);
  }

  field: Field;

  init(size: number, numberOfMines: number):void {
    this.field = new Field();
    this.field.Init(size, numberOfMines);
  }

  onClick(block: BlockViewModel) {

    this.field.OpenOneBlock(block.Row, block.Col);
    let gameStatus = this.field.CheckGameStatus();
    this.updateBlockViewModel(block);

  }

  buildRowsOfBlocks(): RowOfBlocksViewModel[] {

    let rowsOfBlocks: RowOfBlocksViewModel[] = [];
    for (let row = 0; row < this.field.Size; ++row) {
      let rowOfBlocks = new RowOfBlocksViewModel();
      rowOfBlocks.Blocks = [];
      rowsOfBlocks.push(rowOfBlocks);
      for (let col = 0; col < this.field.Size; ++col) {
        let block = new BlockViewModel();
        block.Col = col;
        block.Row = row;
        this.updateBlockViewModel(block);
        rowOfBlocks.Blocks.push(block);
      }
    }

    return rowsOfBlocks;
  }

  updateBlockViewModel(block: BlockViewModel): void {
    block.IsOpen = this.field.IsBlockOpen(block.Row, block.Col);
    block.CountMinesAround = 0;
    if (block.IsOpen) {
      block.CountMinesAround = this.field.GetCountMinesAround(block.Row, block.Col);
    }
  }

}