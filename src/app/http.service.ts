import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getPic() {
    return this.http.get('https://picsum.photos/v2/list?limit=10')
  }
}
