import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  login(email, password) {
    return this.http.post('https://futprofit.com/api/login', {email: email, password: password}).toPromise();
  }

  tradeos(token) {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get('https://futprofit.com/api/tradeos', {headers}).toPromise();
  }

  getPlayers(id, token) {
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    let url = 'https://futprofit.com/api/players/tradeo/' + id;
    console.log(url)
    console.log(token)
    console.log(id)
    return this.http.get(url, {headers}).toPromise();
  }
}
