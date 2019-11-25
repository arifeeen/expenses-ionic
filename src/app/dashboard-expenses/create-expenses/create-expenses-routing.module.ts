import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateExpensesPage } from './create-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: CreateExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateExpensesPageRoutingModule {}
