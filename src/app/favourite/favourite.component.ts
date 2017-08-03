import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  // inputs: ['isFavouriteToo']
})
export class FavouriteComponent implements OnInit {

  @Input() isFavourite: boolean;
  @Input() isDashFavourite: boolean;
  isFavouriteToo: boolean;
  @Output() click = new EventEmitter(); // the 'change' here links to teh component html property
  // isFavourite: boolean = false;
  titleText: string;
  courses: number[] = [];
  viewMode: string;
  serverCourses;
  moreCourses: [{ id: number, name: string }] = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
    { id: 4, name: 'Course 4' }
  ];
    canSave = true;

  task = {
    title: 'Reivew applications',
    assignee: null
  };

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.isFavouriteToo = !this.isFavouriteToo;
    this.isDashFavourite = !this.isDashFavourite;
    this.click.emit({ newValue: this.isFavourite });
  }

  onAdd() {
    this.moreCourses.push({ id: 5, name: 'Course 5' });
  }

  onRemove(course) {
    const index = this.moreCourses.indexOf(course);
    this.moreCourses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'Some new name';
  }


  onLoad() {
    this.serverCourses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' },
      { id: 4, name: 'Course 4' }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }



  constructor() { }

  ngOnInit() {
  }

}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
}
