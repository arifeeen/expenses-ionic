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
  totalSpending = 0;
  constructor(
    private dbService: DbService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.totalSpending = 0;
    this.getExpenses();
  }

  async getExpenses() {
    this.expenses = await this.dbService.getAllExpenses();
    this.expenses.forEach(element => {
      this.totalSpending += Number.parseFloat(element.amount);
    });
  }

  filterData() {
    this.filterOptions = !this.filterOptions;
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
        this.totalSpending = 0;
        this.expenses = this.expenses.filter(obj => {
          if (obj.date >= startTime && obj.date <= endTime) {
            this.totalSpending += Number.parseFloat(obj.amount);
            return true;
          }
          return false;
        });
        loadCtrl.dismiss();
      });
  }
}
