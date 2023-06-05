import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AddBookComponent } from './add-book.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { shownNotificationAction } from '../notification/notification.actions';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    AddBookComponent,
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  dataSource = [];
  displayedColumns = [
    'name',
    'authorName',
    'publishDate',
    'price',
    'actions'
  ]

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private store: Store
  ) { }

  ngOnInit() {
    this.http.get("https://localhost:44328/api/app/book", { withCredentials: true })
      .subscribe({
        next: (value: any) => {
          this.dataSource = value.items;
        },
        error: (error: any) => {
          console.log(error);

        }
      })
  }

  addBook() {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '600px'
    })

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  update(book: any) {
    const { publishDate, price, name, authorId, id } = book;

    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '600px',
      data: {
        default: {
          publishDate,
          price,
          name,
          authorId
        },
        bookId: id,
        httpMethod: 'put'
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }

  delete(bookId: string) {
    const url = new URL(bookId, "https://localhost:44328/api/app/book/");

    console.log(url.toString());

    this.http.delete(
      `https://localhost:44328/api/app/book/${bookId}`,
      { withCredentials: true }
    )
      .subscribe({
        next: (value) => {
          console.log(value);
          this.dataSource = this.dataSource.filter((book: any) => book.id != bookId)
          this.store.dispatch(shownNotificationAction({ message: "book deleted successfuly" }))
        },
        error: (error) => {
          console.log(error);
        }
      })
  }
}
