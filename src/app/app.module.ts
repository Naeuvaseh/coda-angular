import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './containers/pizza/pizza.component';
import { ToppingComponent } from './components/topping/topping.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PizzaComponent, ToppingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
