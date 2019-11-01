import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataNumerosComponent } from './data-binding/data-numeros/data-numeros.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataNumerosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
