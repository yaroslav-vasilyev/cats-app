import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  private baseUrl = 'https://api.thecatapi.com/v1';
  private apiKey = 'live_2WUxKiNYapNV8ZopsU6lfRsTiFuLVwGXGtLlTPd3WcR5bQyfrsVyCSYk1XmubzFp';

  constructor(private http: HttpClient) {}

  searchAllCats(limit: number): Observable<any> {
    const url = `${this.baseUrl}/images/search?limit=${limit}`;
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get(url, { headers });
  }

  searchCatsByBreed(breedId: string, limit: number): Observable<any> {
    const url = `${this.baseUrl}/images/search?breed_ids=${breedId}&limit=${limit}`;
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get(url, { headers });
  }

  getAllBreeds(): Observable<any> {
    const url = `${this.baseUrl}/breeds`;
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get(url, { headers });
  }
}
