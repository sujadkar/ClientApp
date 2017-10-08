import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoGamesComponent } from './video-games/video-games.component';
import { VideoGameAddComponent } from './video-game-add/video-game-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent,
    VideoGameAddComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
