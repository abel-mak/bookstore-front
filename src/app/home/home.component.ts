import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BookListComponent],
  templateUrl: `home.component.html`,
  standalone: true,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}
