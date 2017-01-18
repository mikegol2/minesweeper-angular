import { Component } from '@angular/core';
import { Field, GameStatus } from './field';
import { BlockViewModel, RowOfBlocksViewModel } from './blockviewmodel';

@Component({
  moduleId: module.id,
  selector: 'minesweeper-field',
  templateUrl: 'field.component.html'
})
export class FieldComponent
{
  constructor() {
    this.init(10,10);
  }

  field: Field;
  gameStatus: GameStatus;

  init(size: number, numberOfMines: number):void {
    this.field = new Field();
    this.field.Init(size, numberOfMines);
    this.gameStatus = this.field.CheckGameStatus();
  }

  onClick(block: BlockViewModel) {
    if (this.gameStatus.Lost || this.gameStatus.Won)
      return;

    this.field.OpenOneBlock(block.Row, block.Col);
    this.gameStatus = this.field.CheckGameStatus();
    this.updateBlockViewModel(block);
    if (this.gameStatus.Lost) {
      alert('You lost!');
    }

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