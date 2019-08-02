import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) { }

  getChampions(): Observable<any> {
    return this.http.get<any>('https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json');
  }
}

