import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PortComponent } from './components/port/port.component';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from 'shared/ui/src';
import { MonoComponent } from './components/mono/mono.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    PortComponent,
    MonoComponent,
  ],
  imports: [
    BrowserModule,
    SharedUiModule,
    RouterModule.forRoot([
      {
        path: 'cart',
        loadChildren: () =>
          import('@angular-mono/cart').then((m) => m.CartModule),
      },
      {
        path: '**',
        component: PortComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
