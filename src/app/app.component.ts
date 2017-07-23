import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from "./favourite/favourite.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Section 5';
  post: { title: string, isFavourite: boolean, isFavouriteToo: boolean, isDashFavourite: boolean } = {
    title: 'A post title',
    isFavourite: false,
    isFavouriteToo: true,
    isDashFavourite: true
  }

  onFavouriteChange(eventArgs: FavouriteChangedEventArgs) {
    console.log(`You changed something to ${eventArgs.newValue}`);
  }

  tweet: { body: string, likesCount: number, isLiked: boolean } = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }
}
