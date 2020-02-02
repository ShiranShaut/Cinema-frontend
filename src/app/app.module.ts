import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchScreenComponent } from './Screens/search-screen/search-screen.component';
import { WishListScreenComponent } from './Screens/wish-list-screen/wish-list-screen.component';
import { SearchResultsScreenComponent } from './Screens/search-results-screen/search-results-screen.component';
import { MovieDetailsScreenComponent } from './Screens/movie-details-screen/movie-details-screen.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    WishListScreenComponent,
    SearchResultsScreenComponent,
    MovieDetailsScreenComponent,
    MovieComponent
  ],
  entryComponents: [
    MovieDetailsScreenComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    MatDialogModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
