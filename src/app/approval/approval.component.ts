import { Component, OnInit, ViewChild } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

const supabaseUrl = 'https://ivdssecobaflwqyievxx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2ZHNzZWNvYmFmbHdxeWlldnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MzQ0MDEsImV4cCI6MjAyNjQxMDQwMX0.AspPNVvFryDILKQTa21DbyFuTDU5d_9t7gYlrQu9uhY';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css'],
})
export class ApprovalComponent implements OnInit {
  products: any[] = [];
  displayedColumns: string[] = [
    'serialNumber',
    'product_name',
    'quantity',
    'specification',
    'vendor_name',
    'approval',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    supabase
      .from('product')
      .select('*')
      .order('id', { ascending: true}) // Order by id in ascending order
      .then(({ data, error }) => {
        if (error) {
          console.error('Error fetching data:', error);
        } else {
          this.products = data;
          this.updateDataSource();
        }
      });
  }

  updateDataSource(): void {
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.paginator = this.paginator;
  }

  approveProduct(product: any): void {
    supabase
      .from('product')
      .update({ approved: true })
      .eq('id', product.id)
      .then(({ data, error }) => {
        if (error) {
          console.error('Error updating product:', error);
        } else {
          console.log('Product updated:', data);
          this.fetchProducts(); // Refetch the products after updating
          this.snackBar.open('Product approved', 'Close', { duration: 5000 });
        }
      });
  }

  logout(): void {
    // Perform any necessary logout logic, e.g., clearing session/token
    this.router.navigate(['/head']);
  }
}