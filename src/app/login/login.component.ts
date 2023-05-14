import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatButtonModule, MatInputModule, FormsModule, HttpClientModule, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }
  ngOnInit() { }
  onSubmit(form: NgForm) {
    // form.preventDefault()
    const { username, password } = form.value;
    console.log(username, password);

    /* send values to server */
    this.http.post("https://localhost:44328/api/account/login", {
      userNameOrEmailAddress: username,
      password,
      rememberMe: true
    })
      .subscribe({
        next: (value: any) => {
          if (value.result != 1) {
            const desciption = null
            this.snackBar.open((desciption == 'InvalidUserNameOrPassword') ? desciption : "username or password incorrect", 'Close', { duration: 3000 });

          }
        },
        error: (error: any) => {
          console.log("error:", error);
          const errorDetail = error?.error?.error?.details;
          console.log(errorDetail);
          this.snackBar.open((errorDetail) ? errorDetail : "an error occured", 'Close', { duration: 3000 });
        }
      })
  }
}
