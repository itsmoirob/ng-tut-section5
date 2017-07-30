import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SignupFormComponent  } from './signup-form/signup-form.component';
import { CourseFormComponent } from './course-form/course-form.component'; 


@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    SignupFormComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
