import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { shownNotificationAction } from '../notification/notification.actions';
import { HttpClient } from '@angular/common/http';
import { unauthenticatedAction } from '../auth/auth.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private store: Store, private http: HttpClient) {
  }

  logout() {
    this.http.get("https://localhost:44328/api/account/logout")
      .subscribe({
        next: () => {
          this.store.dispatch(unauthenticatedAction())
        }
      })
  }
}
