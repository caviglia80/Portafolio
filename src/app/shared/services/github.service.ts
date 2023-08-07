import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) { }

  getRepos(): Observable<any[]> {  
    return this.http.get<any[]>(`https://api.github.com/users/caviglia80/repos`);
  }
}
