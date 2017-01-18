import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FieldComponent } from './field.component';
import { BlockComponent } from './block.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FieldComponent, BlockComponent ],
  bootstrap:    [ AppComponent, FieldComponent, BlockComponent ]
})
export class AppModule { }
