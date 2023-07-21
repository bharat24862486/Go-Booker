import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  fetchSingleMovieCinema(name:string, queryParam1:any): Observable<any> {
    const params = new HttpParams()
      .set('param1', queryParam1)
      

    // Set the HTTP headers if needed
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });
    return this.http.get<any>(`http://localhost:5000/single_movie_cinema/${name}`,{params})
  }

  getIsUserRegistered(obj:any) : Observable<any> {
    return this.http.post<any>(`http://localhost:5000/get_user_by_Email`,obj)
  }

  getUserRegistered(obj:any) : Observable<any> {
    return this.http.post<any>(`http://localhost:5000/add_user`,obj)
  }

  getLocation = ""

  searchState:boolean = false;

  

  
}