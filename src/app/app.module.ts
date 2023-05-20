import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { EffectsModule } from '@ngrx/effects';
import { NotificationEffect } from './notification/notification.effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    BookListComponent,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LoginComponent,
    HeaderComponent,
    OrderComponent,
    StoreModule.forRoot(),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forRoot([NotificationEffect, AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
