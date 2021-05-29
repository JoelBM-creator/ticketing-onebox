import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastNotificacionService } from '../service/toast-notificacion.service';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let mensajeError = '';
        if (error.error instanceof ErrorEvent) {
          mensajeError = `Error: ${error.error.message}`;
        } else {
          mensajeError = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        alert(
          'Upps... 😥 - Lo sentimos, no se ha podido establecer la conexión con la base de datos.'
        );
        return throwError(mensajeError);
      })
    );
  }
}
