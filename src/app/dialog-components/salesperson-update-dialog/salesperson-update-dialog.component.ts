import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ItemModel} from "../../../assets/models/itemModel";
import {SalespersonModel} from "../../../assets/models/salespersonModel";

@Component({
  selector: 'app-salesperson-update-dialog',
  templateUrl: './salesperson-update-dialog.component.html',
  styleUrls: ['./salesperson-update-dialog.component.css']
})
export class SalespersonUpdateDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<SalespersonUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SalespersonModel) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
