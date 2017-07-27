import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  isFavourite: boolean = false;
  titleText: string;
  courses: number[] = [];
  viewMode: string;
  moreCourses: [{ id: number, name: string }] = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
    { id: 4, name: 'Course 4' }
  ]

  onClick() {
    this.isFavourite = !this.isFavourite;
  }

  onAdd() {
    this.moreCourses.push({ id: 5, name: 'Course 5' });
  }

  onRemove(course) {
    let index = this.moreCourses.indexOf(course);
    this.moreCourses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'Some new name';
  }

  serverCourses;
  onLoad() {
    this.serverCourses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' },
      { id: 4, name: 'Course 4' }
    ]
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  canSave: boolean = true;

  task = {
    title: 'Reivew applications',
    assignee: null
  }

  constructor() { }

  ngOnInit() {
  }

}
