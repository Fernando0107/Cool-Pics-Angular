import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  users: Object;
  pics: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {

    this._http.getPic().subscribe(data => {

      this.pics = data;

      console.log('Hello', this.pics)
    })

    this._http.getUser().subscribe(data => {

      this.users = data;

      console.log(this.users)

    })

  }

}
