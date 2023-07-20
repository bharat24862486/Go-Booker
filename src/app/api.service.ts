import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class ApiService {
  constructor(private http: HttpClient) {}

  fetchMovieData(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/movies');
  }

  fetchSingleMovieData(ID:string): Observable<any> {
    return this.http.get<any>(`http://localhost:5000/single_movie/${ID}`)
  }

  fetchSingleMovieCinema(name:string): Observable<any> {
    return this.http.get<any>(`http://localhost:5000/single_movie_cinema/${name}`)
  }

  searchState:boolean = false;

  

  
}