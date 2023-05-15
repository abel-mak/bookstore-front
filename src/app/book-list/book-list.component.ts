import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, HttpClientModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: any[] = [
    {
      name: 'Book 1',
      authorName: 'author name of Book 1'
    },
    {
      name: 'Book 2',
      authorName: 'author name of Book 2'
    },
    {
      name: 'Book 3',
      authorName: 'author name of Book 3'
    }
  ];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("https://localhost:44328/api/app/book")
      .subscribe({
        next: (value : any) => {
          this.books = value.items;
          console.log(value);
        },
        error: (error) => {
          console.log(error);
        }
      })

  }

  orderBook(book: any) {
    // Handle the order button click event here
    console.log('Ordered:', book);
  }
}
