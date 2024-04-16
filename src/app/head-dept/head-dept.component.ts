import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-head-dept',
  templateUrl: './head-dept.component.html',
  styleUrls: ['./head-dept.component.css']
})
export class HeadDeptComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private _snackBar: MatSnackBar, 
    private router: Router, 
    private afAuth: AngularFireAuth

  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'end', // Display at the right-most side
    verticalPosition: 'top', // Adjust as per your requirement
    });
  }



  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
    .then((result) => {
      
      console.log('User is signed in:', result);
      this.router.navigate(['/approval']);
      this.openSnackBar('Login Successful', 'Close');
    })
    .catch((error) => {
      
      console.error('Sign-in error:', error);
      this.errorMessage = 'Invalid credentials. Please try again.';
    });
}
}