import {Component, OnInit} from '@angular/core';
import {SalespersonService} from "../services/salesperson-service";
import {MatDialog} from "@angular/material/dialog";
import {NotificationService} from "../services/notification/notification.service";
import {SalespersonUpdateDialogComponent} from "../dialog-components/salesperson-update-dialog/salesperson-update-dialog.component";
import {SalespersonReportDialogComponent} from "../dialog-components/salesperson-report-dialog/salesperson-report-dialog.component";
import {DashboardService} from "../services/dashboard-service";

@Component({
  selector: 'app-salespersons-page',
  templateUrl: './salespersons-page.component.html',
  styleUrls: ['./salespersons-page.component.css']
})
export class SalespersonsPageComponent implements OnInit {

  salespersonsList: any = [];
  salesForSalesman: any = [];

  constructor(private salespersonService: SalespersonService,private dashboardService: DashboardService, public dialog: MatDialog, private notifyService: NotificationService) { }

  ngOnInit(): void {

    this.salespersonService.getSalesPersons().subscribe(data=> {
      console.log(data);
      this.salespersonsList= data;
    })

  }

  editSalesperson(element:any) {
    let dialogRef = this.dialog.open(SalespersonUpdateDialogComponent, {
      width: '650px',
      disableClose: true,
      data: {
        id: element.id,
        firstName: element.firstName,
        lastName: element.lastName,
        address: element.address,
        phoneNumber: element.phoneNumber,
        startDate: element.startDate,
        terminationDate: element.terminationDate,
        manager: element.manager,
        active: element.active
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result == "" || result == null || result.firstName == ""
        || result.lastName == "" || result.address == ""
        || result.phoneNumber == ""|| result.startDate == ""|| result.terminationDate == ""|| result.manager == "") {
        this.notifyService.showInfo("Empty Input","")
      } else {
        for (let i = 0; i < this.salespersonsList.length; i++) {
          if (result.id == this.salespersonsList[i].id) {

            // updating the list so it updates the fronside
            this.salespersonsList[i].firstName = result.firstName;
            this.salespersonsList[i].lastName = result.lastName;
            this.salespersonsList[i].address = result.address;
            this.salespersonsList[i].phoneNumber = result.phoneNumber;
            this.salespersonsList[i].startDate = result.startDate;
            this.salespersonsList[i].terminationDate = result.terminationDate;
            this.salespersonsList[i].manager = result.manager;
            this.salespersonsList[i].active = result.active;

            // creating new object with the updated data and send it to webserver for updating the DB
            //this.eventService.updateEvent(this.createEventModel).subscribe();
            this.notifyService.showSuccess("Salesman Updated", "")

            break;
          }
        }
      }

    });

  }
  deleteSalesperson(element:any) {

    for (let i = 0; i < this.salespersonsList.length; i++) {
      if (element.productId == this.salespersonsList[i].productId) {
        this.salespersonsList.splice(i, 1);
        // call web service and delete it from DB.
        //this.eventService.deleteEvent(result).subscribe();
        break;
      }
    }

  }

  reportSalesperson(element:any) {

    this.dashboardService.getSalesBySalesmanId(element.id).subscribe(data=> {
      this.salesForSalesman= data;

      let dialogRef = this.dialog.open(SalespersonReportDialogComponent, {
        width: '650px',
        disableClose: true,
        data: {
          salespersonSales: this.salesForSalesman
        }
      });

      dialogRef.afterClosed().subscribe(result => {


      });

    })

  }

}
