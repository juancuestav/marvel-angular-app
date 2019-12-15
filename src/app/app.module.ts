import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { HistorietasComponent } from './historietas/historietas.component';

import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes : Routes = [
  { path:"", component: HomeComponent},
  { path:"videos", component: VideosComponent},
  { path:"historietas", component: HistorietasComponent},
  { path:"**", component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent,
    HistorietasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
