import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/Services/server.service';
import { Movie } from 'src/app/Models/movie.model';
import { ManageStorageService } from 'src/app/Services/manage-storage.service';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css']
})
export class SearchScreenComponent {
  movieToSearch: string;
  movies: Movie[] = [];

  constructor(private serverService: ServerService, private manageStorageService: ManageStorageService) { }

  onInputChange() {
    this.fetchMovies();
  }

  fetchMovies() {
    let movies = this.manageStorageService.fetchMoviesFromLocalStorage(this.movieToSearch);

    if (movies.length > 0) {
      this.movies = movies;
    } else {
      this.serverService.fetchMovie(this.movieToSearch)
        .subscribe(moviesArray => {
          this.movies = moviesArray;
        },
          error => {
            console.log(error);
            this.movies = [];
          });
    }
  }
}