import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardExpensesPage } from './dashboard-expenses.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/expenses/create-expenses',
    pathMatch: 'full'
  },
  {
    path: 'expenses',
    component: DashboardExpensesPage,
    children: [
      {
        path: 'create-expenses',
        loadChildren: () =>
          import('./create-expenses/create-expenses.module').then(
            m => m.CreateExpensesPageModule
          )
      },
      {
        path: 'view-expenses',
        loadChildren: () =>
          import('./view-expenses/view-expenses.module').then(
            m => m.ViewExpensesPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardExpensesPageRoutingModule {}
