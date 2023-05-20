import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';


export interface PeriodicElement {
  bookId: number;
  quantity: string;
  orderTime: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { bookId: 1, quantity: 'Hydrogen', orderTime: 1.0079 },
  { bookId: 2, quantity: 'Helium', orderTime: 4.0026 },
  { bookId: 3, quantity: 'Lithium', orderTime: 6.941 },
  { bookId: 4, quantity: 'Beryllium', orderTime: 9.0122 },
  { bookId: 5, quantity: 'Boron', orderTime: 10.811, },
  { bookId: 6, quantity: 'Carbon', orderTime: 12.0107, },
  { bookId: 7, quantity: 'Nitrogen', orderTime: 14.0067 },
  { bookId: 8, quantity: 'Oxygen', orderTime: 15.9994 },
  { bookId: 9, quantity: 'Fluorine', orderTime: 18.9984 },
  { bookId: 10, quantity: 'Neon', orderTime: 20.1797 },
];

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, MatTableModule, HttpClientModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  dataSource = [];
  displayedColumns: string[] = ['bookId', 'quantity', 'orderTime'];

  constructor(private http: HttpClient) {
    this.http.get("https://localhost:44328/api/app/order")
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.dataSource = value.items;
        },
        error: (err) => {
          console.log(err);

        }
      })
  }
}

