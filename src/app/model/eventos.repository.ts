import { Injectable } from '@angular/core';
import { Eventos } from './eventos.model';
import { ObjectEvent } from './objectEvent.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class EventosRepository {
  private eventos: Eventos[] = [];
  private evento184: ObjectEvent;
  private evento68: ObjectEvent;
  constructor(private dataSource: RestDataSource) {
    this.dataSource.getEventos().subscribe((data) => {
      this.eventos = data;
    });
    this.dataSource.getEvento184().subscribe((data) => {
      this.evento184 = data;
    });
    this.dataSource.getEvento68().subscribe((data) => {
      this.evento68 = data;
    });
  }
  getEventos(): Eventos[] {
    return this.eventos;
  }
  getEvento(id: string = null): ObjectEvent {
    if (id === this.evento184.event.id) {
      return this.evento184;
    } else if (id === this.evento68.event.id) {
      return this.evento68;
    } else {
      return undefined;
    }
  }
}
