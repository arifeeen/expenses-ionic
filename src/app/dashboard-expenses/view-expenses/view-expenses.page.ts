import { Component, OnInit } from "@angular/core";
import { DbService } from "src/app/root-services/db.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-view-expenses",
  templateUrl: "./view-expenses.page.html",
  styleUrls: ["./view-expenses.page.scss"]
})
export class ViewExpensesPage implements OnInit {
  expenses;
  filterOptions = false;
  startDate;
  endDate;
  constructor(
    private dbService: DbService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.getExpenses();
  }

  async getExpenses() {
    this.expenses = await this.dbService.getAllExpenses();
    console.log("expenses", this.expenses);
  }

  filterData() {
    this.filterOptions = !this.filterOptions;
    console.log("inside filter function", this.startDate, this.endDate);
    if (!this.startDate) {
      return;
    }

    this.loadingController
      .create({
        keyboardClose: true,
        message: "Filtering Expenses..."
      })
      .then(async loadCtrl => {
        loadCtrl.present();
        const startTime = new Date(this.startDate.slice(0, 10)).getTime();
        const endTime = new Date(this.endDate.slice(0, 10)).getTime();
        this.expenses = await this.dbService.getAllExpenses();
        this.expenses = this.expenses.filter(obj => {
          if (obj.date >= startTime && obj.date <= endTime) {
            console.log(obj.date);
            return true;
          }
          return false;
        });
        loadCtrl.dismiss();
      });
  }
}
