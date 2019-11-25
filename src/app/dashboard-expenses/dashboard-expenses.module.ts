import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardExpensesPageRoutingModule } from './dashboard-expenses-routing.module';

import { DashboardExpensesPage } from './dashboard-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardExpensesPageRoutingModule
  ],
  declarations: [DashboardExpensesPage]
})
export class DashboardExpensesPageModule {}
