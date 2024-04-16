import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';

import 'jspdf-autotable';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  item: any;
  signatureImage = new Image();
  pdfData: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Load the signature image
    this.signatureImage.src = 'assets/signature.png';
  }

  ngOnInit(): void {
    // Retrieve the item data from the router state
    this.item = history.state.item;

    // Generate the PDF
    this.generatePDF();
  }

  generatePDF(): void {
    const companyName = 'Defect Free Manufacturing Company Private Limited';
    const companyAddress = '123 Main Street, Coimbatore, Tamil Nadu, 641 062';
    const pdf = new jsPDF('p', 'pt', 'a4');
  
    pdf.setFontSize(18);
    pdf.text(companyName, 20, 20);
  
    pdf.setFontSize(14);
    pdf.text(companyAddress, 20, 40);
  
    pdf.setFontSize(20);
    pdf.setFont('', 'bold'); // Use an empty string for the font family
    pdf.text('Quotation to Vendor', 20, 70);
  
    const productData = [
      ['ID Number', 'Product Name', 'Quantity', 'Specification', 'Vendor Name'],
      [
        this.item.id,
        this.item.product_name,
        this.item.quantity,
        this.item.specification,
        this.item.vendor_name
      ]
    ];
  
    const headerColor = [0, 0, 0];
    const headerTextColor = [255, 255, 255];
    const headStyles = {
      fillColor: headerColor,
      textColor: headerTextColor,
      fontStyle: 'bold'
    };
  
    const columnStyles = {
      0: { halign: 'center', cellWidth: 60 },
      1: { halign: 'center', cellWidth: 120 },
      2: { halign: 'center', cellWidth: 60 },
      3: { halign: 'center', cellWidth: 120 },
      4: { halign: 'center', cellWidth: 120 }
    };
  
    const tableStartY = 100;
    const tableData = pdf.autoTable({
      startY: tableStartY,
      head: [productData[0]],
      body: [productData[1]],
      theme: 'grid',
      headStyles,
      //columnStyles,
      //margin: { horizontal: 20 }
    });
  
    const signatureCanvas = document.createElement('canvas');
    const signatureContext = signatureCanvas.getContext('2d');
    signatureContext?.drawImage(this.signatureImage, 0, 0);
  pdf.addImage(signatureCanvas.toDataURL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_xjHI8Uzf9wW5UYxiSOfAs-YMpTTlShQq2GJ00AkkQ&s'), 'PNG', 20, pdf.internal.pageSize.getHeight() - 80, 100, 50);

  pdf.setFontSize(12);
  pdf.text('Coimbatore', 20, pdf.internal.pageSize.getHeight() - 20);

  
    const pdfBlob = pdf.output('blob');
    this.pdfData = URL.createObjectURL(pdfBlob);
  }
}