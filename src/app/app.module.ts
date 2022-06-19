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
import { ResumeComponent } from './components/resume/resume.component';
import { BaseComponent } from './components/base/base.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ProgressDirective,
    HeroComponent,
    AboutComponent,
    ResumeComponent,
    BaseComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    MatProgressBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [MatProgressBarModule],
  // adding to providers array makes service injectable
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
