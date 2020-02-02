import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../Models/movie.model';

@Component({
  selector: 'app-search-results-screen',
  templateUrl: './search-results-screen.component.html',
  styleUrls: ['./search-results-screen.component.css']
})
export class SearchResultsScreenComponent {
  @Input() movieToSearch: string;
  @Input() movies: Movie[];
}