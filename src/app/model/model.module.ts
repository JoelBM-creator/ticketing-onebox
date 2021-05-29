import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Carrito } from './carrito.model';
import { EventosRepository } from './eventos.repository';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { RestDataSource } from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    RestDataSource,
    EventosRepository,
    Carrito,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
})
export class ModelModule {}
