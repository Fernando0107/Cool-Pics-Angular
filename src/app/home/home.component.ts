import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = '';
  counter: number = 0;



  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {

    if (this.counter == 0) {

      this.counter += 1;

    } else {
      this.counter = 0;

    }

  }

}
