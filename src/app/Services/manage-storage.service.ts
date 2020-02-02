import { Injectable } from '@angular/core';
import { Movie } from '../Models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ManageStorageService {

  storeMovieOnLocalStorage(movie: Movie) {
    localStorage.setItem(movie.id, JSON.stringify(movie));
  }

  movieStoredInLocalStorage(movie: Movie) {
    return localStorage.getItem(movie.id) !== null;
  }

  removeMovieFromLocalStorage(movie: Movie) {
    localStorage.removeItem(movie.id);
  }

  getMovieFromLocalStorage(movieId: string) {
    return JSON.parse(localStorage.getItem(movieId));
  }

  fetchMoviesFromLocalStorage(movieName: string) {
    const movies = [];
    let keys = Object.keys(localStorage);

    for (let key of keys) {
      let movie = JSON.parse(localStorage.getItem(key));

      // example: "bat" - batman 1, batman 2 ... so includes instead of equals.
      if ((<Movie>movie).title.includes(movieName)) {
        movies.push(movie);
      }
    }

    return movies;
  }
}