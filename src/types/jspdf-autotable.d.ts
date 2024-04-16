import 'jspdf';

declare module 'jspdf' {
  interface AutoTableInput {
    head?: Array<any>;
    body?: Array<Array<any>>;
    startY?: number;
    theme?: 'striped' | 'grid' | 'plain';
    styles?: { fillColor?: Array<number> };
    headStyles?: { fillColor?: Array<number> };
    bodyStyles?: { fillColor?: Array<number> };
    columns?: Array<{ header?: string; dataKey?: string }>;
    columnStyles?: { halign?: 'left' | 'center' | 'right' };
  }

  interface jsPDF {
    autoTable(input?: AutoTableInput): void;
  }
}