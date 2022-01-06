import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SalespersonModel} from "../../../assets/models/salespersonModel";
import {SalesDTO} from "../../../assets/models/salesDTO";

@Component({
  selector: 'app-salesperson-report-dialog',
  templateUrl: './salesperson-report-dialog.component.html',
  styleUrls: ['./salesperson-report-dialog.component.css']
})
export class SalespersonReportDialogComponent  implements OnInit {

  totalCommission: any = 0;

  constructor(
    public dialogRef: MatDialogRef<SalespersonReportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    for (let i = 0; i < this.data.salespersonSales.length; i++) {

      this.totalCommission = this.totalCommission + (this.data.salespersonSales[i].product.salePrice * this.data.salespersonSales[i].product.commission ) / 100;

    }
  }
}
