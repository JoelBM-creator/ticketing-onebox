import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos } from './eventos.model';
import { ObjectEvent } from './objectEvent.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  getEventos(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.baseUrl + 'eventos');
  }
  getEvento184(): Observable<ObjectEvent> {
    return this.http.get<ObjectEvent>(this.baseUrl + 'evento184');
  }
  getEvento68(): Observable<ObjectEvent> {
    return this.http.get<ObjectEvent>(this.baseUrl + 'evento68');
  }
}
