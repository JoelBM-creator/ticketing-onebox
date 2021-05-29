import { Injectable } from '@angular/core';
import { Evento } from './evento.model';
import { Session } from './session.model';
@Injectable()
export class Carrito {
  public lineas: LineaCarrito[] = [];
  public eventosCount = 0;
  anadirLinea?(evento: Evento, session: Session, cantidad: number = 1) {
    const linea = this.lineas.find(
      (lineaF) => lineaF.session.date === session.date
    );
    if (linea !== undefined) {
      const parseCantidad: number = parseInt(linea.session.availability, 10);
      if (parseCantidad > linea.cantidad) {
        linea.cantidad += cantidad;
      } else {
        return false;
      }
    } else {
      this.lineas.push(new LineaCarrito(evento, session, cantidad));
    }
    this.recalcular();
  }
  updateCantidad?(session: Session) {
    const linea = this.lineas.find(
      (lineaF) => lineaF.session.date === session.date
    );
    if (linea.cantidad === 1) {
      this.quitarLinea(linea.session.date);
    } else {
      linea.cantidad -= 1;
    }
    this.recalcular();
  }
  quitarLinea?(fecha: string) {
    const index = this.lineas.findIndex(
      (linea) => linea.session.date === fecha
    );
    this.lineas.splice(index, 1);
    this.recalcular();
  }
  limpiar?() {
    this.lineas = [];
    this.eventosCount = 0;
  }
  obtenerCantidad?(session: Session) {
    const linea = this.lineas.find(
      (lineaF) => lineaF.session.date === session.date
    );
    if (linea === undefined) {
      return 0;
    } else {
      return linea.cantidad;
    }
  }
  private recalcular?() {
    this.lineas.forEach((l) => {
      this.eventosCount += l.cantidad;
    });
  }
}

export class LineaCarrito {
  constructor(
    public evento: Evento,
    public session: Session,
    public cantidad: number
  ) {}
}
