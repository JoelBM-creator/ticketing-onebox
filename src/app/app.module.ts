import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { ModelModule } from './model/model.module';
import { SortPipe } from './shared/sort.pipe';
import { ToastrModule } from 'ngx-toastr';
import { EventoComponent } from './components/evento/evento.component';
import { RouterModule } from '@angular/router';
import { EventosFirstGuard } from './eventosFirst.guard';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarteleraComponent,
    SortPipe,
    EventoComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ModelModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'cartelera',
        component: CarteleraComponent,
        canActivate: [EventosFirstGuard],
      },
      {
        path: 'evento',
        component: EventoComponent,
        canActivate: [EventosFirstGuard],
      },
      { path: '**', redirectTo: '/cartelera' },
    ]),
  ],
  providers: [EventosFirstGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
