import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { FieldComponent } from './field.component';
import { BlockComponent } from './block.component';
import { NewGameComponent } from './newgame.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'game',
        component: AppComponent
      }
    ])
  ],
  declarations: [ AppComponent, FieldComponent, BlockComponent, NewGameComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
