import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  inputs: ['isFavouriteToo']
})
export class FavouriteComponent implements OnInit {

  @Input() isFavourite: boolean;
  @Input('is-dash-favourite') isDashFavourite: boolean;
  isFavouriteToo: boolean;
  @Output('change') click = new EventEmitter(); //the 'change' here links to teh component html property

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.isFavouriteToo = !this.isFavouriteToo;
    this.isDashFavourite = !this.isDashFavourite;
    this.click.emit({ newValue: this.isFavourite });
  }

  constructor() { }

  ngOnInit() {
  }

}

export interface FavouriteChangedEventArgs {
  newValue: boolean
}