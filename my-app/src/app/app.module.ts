import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { IndexComponent } from './index/component/index.component';
import { IndexModule } from './index/index.module';

@NgModule({
  declarations: [
    AppComponent,
    // IndexComponent,
  ],
  imports: [
    IndexModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
