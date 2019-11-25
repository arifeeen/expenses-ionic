import { Component, OnInit } from "@angular/core";
import { DbService } from "src/app/root-services/db.service";

@Component({
  selector: "app-view-expenses",
  templateUrl: "./view-expenses.page.html",
  styleUrls: ["./view-expenses.page.scss"]
})
export class ViewExpensesPage implements OnInit {
  expenses;
  constructor(private dbService: DbService) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.getExpenses();
  }

  async getExpenses() {
    this.expenses = await this.dbService.getAllExpenses();
    console.log("expenses", this.expenses);
  }
}
