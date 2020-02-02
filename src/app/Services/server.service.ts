import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieData } from '../Models/movieData.model';
import { Movie } from '../Models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  fetchMovie(movieName: string) {
    let movies = [];

    return this.http
      .get<{ movies: [], message: string, succeded: boolean }>('http://localhost:8080/cinema/title/' + movieName)
      .pipe(map(responeData => {
        if (responeData.succeded) {
          for (let movie of responeData.movies) {
            let movieData = <MovieData>movie;

            movies.push({
              id: movieData.imdbID,
              title: movieData.title,
              type: movieData.type,
              year: movieData.year,
              imgSrc: movieData.poster
            });
          }
        }

        return movies;
      }));
  }

  fetchMovieById(id: string) {
    return this.http
      .get<{ movie: Movie, message: string, succeded: boolean }>('http://localhost:8080/cinema/id/' + id)
      .pipe(map(responeData => {
        return <Movie>responeData.movie;
      }));
  }
}