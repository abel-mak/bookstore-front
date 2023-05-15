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
      title: 'Book 1',
      author: 'author name of Book 1'
    },
    {
      title: 'Book 2',
      author: 'author name of Book 2'
    },
    {
      title: 'Book 3',
      author: 'author name of Book 3'
    }
  ];

  orderBook(book: any) {
    // Handle the order button click event here
    console.log('Ordered:', book);
  }
}
