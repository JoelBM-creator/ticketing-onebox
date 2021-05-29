import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Eventos } from 'src/app/model/eventos.model';
import { EventosRepository } from 'src/app/model/eventos.repository';
import { ToastNotificacionService } from 'src/app/service/toast-notificacion.service';

@Component({
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss'],
})
export class CarteleraComponent {
  constructor(
    private repository: EventosRepository,
    private toastService: ToastNotificacionService,
    private router: Router
  ) {}
  get eventos(): Eventos[] {
    return this.repository.getEventos();
  }
  getEvento(eventId: string) {
    if (this.repository.getEvento(eventId) === undefined) {
      this.toastService.showError(
        'Lo sentimos, se nos han agotado todas las entradas de este evento.',
        `Upps... 😥`
      );
    } else {
      const navigationExtras: NavigationExtras = {
        state: {
          evento: this.repository.getEvento(eventId),
        },
      };
      this.router.navigateByUrl('/evento', navigationExtras);
    }
  }
}
