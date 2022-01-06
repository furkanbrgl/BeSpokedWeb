import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product-service";
import {MatDialog} from "@angular/material/dialog";
import {NotificationService} from "../services/notification/notification.service";
import {DashboardService} from "../services/dashboard-service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  sales: any;

  constructor(private dashboardService: DashboardService, public dialog: MatDialog, private notifyService: NotificationService) { }

  ngOnInit(): void {

    this.dashboardService.getAllSales().subscribe(data=> {
      console.log(data);
      this.sales= data;
    })

  }

}
