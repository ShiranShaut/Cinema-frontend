import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Movie } from '../Models/movie.model';
import { MovieDetailsScreenComponent } from '../Screens/movie-details-screen/movie-details-screen.component';
import { ManageStorageService } from '../Services/manage-storage.service';
import { ServerService } from '../Services/server.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() wishListChanged = new EventEmitter();

  constructor(public dialog: MatDialog, private manageStorageService: ManageStorageService,
    private serverService: ServerService) { }

  ngOnInit() {
    this.movie.inWishList = this.manageStorageService.movieStoredInLocalStorage(this.movie);
  }

  onMovieClicked() {
    // get full movie detail
    this.serverService.fetchMovieById(this.movie.id)
      .subscribe(movie => {
        this.openDialog(movie);
      },
        error => {
          console.log(error);
        });
  }

  openDialog(movie) {
    this.dialog.open(MovieDetailsScreenComponent, {
      data: movie
    });
  }

  onWishListIconClicked() {
    if (this.movie.inWishList) {
      this.removeMovieFromWishList();
    } else {
      this.addMovieToWishList();
    }

    this.wishListChanged.emit();
  }

  addMovieToWishList() {
    this.movie.inWishList = true;
    this.manageStorageService.storeMovieOnLocalStorage(this.movie);
  }

  removeMovieFromWishList() {
    this.movie.inWishList = false;
    this.manageStorageService.removeMovieFromLocalStorage(this.movie);
  }
}