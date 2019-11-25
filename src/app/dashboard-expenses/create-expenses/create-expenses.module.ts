import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateExpensesPageRoutingModule } from './create-expenses-routing.module';

import { CreateExpensesPage } from './create-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateExpensesPageRoutingModule
  ],
  declarations: [CreateExpensesPage]
})
export class CreateExpensesPageModule {}
