import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: any[] = [
    {
      name: 'Book 1',
      description: 'Description of Book 1'
    },
    {
      name: 'Book 2',
      description: 'Description of Book 2'
    },
    {
      name: 'Book 3',
      description: 'Description of Book 3'
    }
  ];

  orderBook(book: any) {
    // Handle the order button click event here
    console.log('Ordered:', book);
  }
}
