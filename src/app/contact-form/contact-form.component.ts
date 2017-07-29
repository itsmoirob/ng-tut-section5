import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  log(model) {
    console.log(model);
  }

  submit(model) {
    console.log(model);
  }

  ngOnInit() {
  }

}
