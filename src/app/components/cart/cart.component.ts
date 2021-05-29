import { Component } from '@angular/core';
import { Session } from 'src/app/model/session.model';
import { Carrito } from 'src/app/model/carrito.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public session: Session;
  constructor(public carrito: Carrito) {}
  quitarSession(seleccionado: Session) {
    this.session = seleccionado;
    this.carrito.quitarLinea(this.session.date);
    return seleccionado;
  }
  get sortData() {
    return this.carrito.lineas.sort((a, b) => {
      if (a.evento.title === b.evento.title) {
        return (
          <any>new Date(JSON.parse(a.session.date)) -
          <any>new Date(JSON.parse(b.session.date))
        );
      }
    });
  }
}
