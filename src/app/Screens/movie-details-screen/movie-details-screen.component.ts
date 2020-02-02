import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Models/movie.model';

@Component({
  selector: 'app-movie-details-screen',
  templateUrl: './movie-details-screen.component.html',
  styleUrls: ['./movie-details-screen.component.css']
})
export class MovieDetailsScreenComponent {
  movie: Movie;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Movie) {
    this.movie = data;
  }
}