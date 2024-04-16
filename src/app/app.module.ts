import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductInputComponent } from './product-input/product-input.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoredDataComponent } from './stored-data/stored-data.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavbarComponent } from './navbar/navbar.component';
import { StatusCheckComponent } from './status-check/status-check.component';
import { HeadDeptComponent } from './head-dept/head-dept.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MatIconModule } from '@angular/material/icon';
import { ApprovalComponent } from './approval/approval.component';
import { PrintComponent } from './print/print.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductInputComponent,
   StoredDataComponent,
       NavbarComponent,
       StatusCheckComponent,
       HeadDeptComponent,
       ApprovalComponent,
       PrintComponent
      

  
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatIconModule
    
    
  
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
