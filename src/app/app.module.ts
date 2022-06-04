import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {} from '@angular/material/core';
import { ProgressDirective } from './directives/progress.directive';
import { MatIconModule } from '@angular/material/icon';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AppComponent, ProgressDirective, HeroComponent, AboutComponent],
  imports: [
    MatProgressBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
  ],
  exports: [MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
