import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Music } from './music';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicService {

  private musicsUrl = 'http://localhost:2403/music';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient) { }


  getMusics(): Observable<Music[]> {
    console.log(this.musicsUrl)
    return this.http.get<Music[]>(this.musicsUrl);
  }



}