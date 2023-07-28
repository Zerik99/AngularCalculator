import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcWindowComponent } from './calc-window/calc-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CalculatorComponent,
    CalcWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
