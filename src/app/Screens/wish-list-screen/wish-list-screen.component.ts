import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Models/movie.model';
import { ManageStorageService } from 'src/app/Services/manage-storage.service';

@Component({
  selector: 'app-wish-list-screen',
  templateUrl: './wish-list-screen.component.html',
  styleUrls: ['./wish-list-screen.component.css']
})
export class WishListScreenComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private manageStorageService: ManageStorageService) { }

  ngOnInit() {
    this.getWishList();
  }

  onWishListChanged() {
    this.getWishList();
  }

  getWishList() {
    this.movies = [];
    let keys = Object.keys(localStorage);

    for (let key of keys) {
      let movie = JSON.parse(localStorage.getItem(key));
      this.movies.push(movie);
    }
  }
}