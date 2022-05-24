import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {} from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatProgressBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  exports: [MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
