import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/model/session.model';
import { ObjectEvent } from 'src/app/model/objectEvent.model';
import { Carrito } from 'src/app/model/carrito.model';
import { ToastNotificacionService } from 'src/app/service/toast-notificacion.service';
import '@cds/core/icon/register.js';
import {
  ClarityIcons,
  angleIcon,
  minusCircleIcon,
  plusCircleIcon,
} from '@cds/core/icon';

ClarityIcons.addIcons(angleIcon, minusCircleIcon, plusCircleIcon);
@Component({
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss'],
})
export class EventoComponent {
  evento: ObjectEvent;
  public session: Session;
  constructor(
    private router: Router,
    public carrito: Carrito,
    private toastService: ToastNotificacionService
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      evento: ObjectEvent;
    };
    this.evento = state.evento;
  }
  get sesiones(): Session[] {
    return this.evento.sessions;
  }
  anadirSession(seleccionado: Session) {
    this.session = seleccionado;
    if (this.carrito.anadirLinea(this.evento.event, this.session) === false) {
      this.toastService.showWarning(
        'Lo sentimos, no nos quedan más entradas.',
        `Upps... 😥`
      );
    }
    return seleccionado;
  }
  quitarSession(seleccionado: Session) {
    this.session = seleccionado;
    this.carrito.updateCantidad(this.session);
    return seleccionado;
  }
}
