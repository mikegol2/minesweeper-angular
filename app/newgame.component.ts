import { Component } from '@angular/core';

export class NewGameModel {

    constructor(size: number, numberOfMines: number) {
        this.size = size;
        this.numberOfMines = numberOfMines;
    }

    size: number;
    numberOfMines: number;

    GetDifficultyText() : string {
        let difficulty = this.GetDifficultyNumber();
        if (difficulty <= 3)
            return "Easy";
        if (difficulty <= 7)
            return "Moderate";
        return "Hard";
    }

    GetDifficultyNumber() : number {
        let ratio = this.size*this.size / this.numberOfMines;
        let difficulty = ratio * 100;
        if (difficulty < 1)
            difficulty = 1;
        if (difficulty > 10)
            difficulty = 10;
        return difficulty;
    }
}

@Component({
  moduleId: module.id,
  selector: 'new-game',
  templateUrl: 'newgame.component.html'
})
export class NewGameComponent {

    model = new NewGameModel(10,10);

    onSubmit() : void {
        alert('submit');
    }

}