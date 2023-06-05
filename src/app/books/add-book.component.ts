import { Component, Inject, OnInit, ViewContainerRef } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select"
import { MatOptionModule } from "@angular/material/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { shownNotificationAction } from "../notification/notification.actions";


@Component({
    selector: 'app-add-book',
    styleUrls: ['./add-book.component.css'],
    templateUrl: './add-book.component.html',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatOptionModule,
        CommonModule
    ]
})
export class AddBookComponent implements OnInit {
    addBookForm: any
    authorOptions: any = [
        'option 1',
        'option 2'
    ]
    default = {
        name: '',
        publishDate: '',
        price: '',
        authorId: '',
    }
    httpMethod: string = "post";

    constructor(
        private http: HttpClient,
        private dialogRef: MatDialogRef<AddBookComponent>,
        private store: Store,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {
        if (this.data) {
            this.default = this.data.default;
            this.httpMethod = this.data.httpMethod
        }
        this.addBookForm = new FormGroup({
            name: new FormControl(this.default.name, [Validators.required]),
            publishDate: new FormControl(this.default.publishDate, [Validators.required]),
            price: new FormControl(this.default.price, [Validators.required, Validators.min(1)]),
            authorId: new FormControl(this.default.authorId, [Validators.required])
        })
    }

    ngOnInit(): void {
        this.http.get("https://localhost:44328/api/app/author", { withCredentials: true })
            .subscribe({
                next: (value: any) => {
                    this.authorOptions = value.items
                },
                error: (error) => {
                    console.log(error)
                }
            })
    }

    onSubmit() {
        if (!this.addBookForm.valid) {
            return
        }
        let url = "https://localhost:44328/api/app/book/";

        if (this.httpMethod == "post" || (this.httpMethod == "put" && this.data?.bookId)) {
            if (this.httpMethod == "put") {
                url += this.data.bookId;
            }
            this.http[this.httpMethod](
                url,
                this.addBookForm.value, {
                withCredentials: true
            }
            )
                .subscribe({
                    next: (value: any) => {
                        console.log(value);
                        this.store.dispatch(
                            shownNotificationAction(
                                { message: `item ${this.httpMethod == "put" ? "updated" : "added"} successfuly` }
                            )
                        )
                        this.dialogRef.close();
                    },
                    error: (error: any) => {
                        console.log(error)
                    }
                })
        }
    }
}