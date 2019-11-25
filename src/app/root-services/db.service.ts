import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  Storage = Plugins.Storage;

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      this.generateUserStore();
    });
  }

  async generateUserStore() {
    const checkStore = await this.Storage.get({ key: 'expenseStore' });
    if (checkStore.value) {
      return;
    }
    await this.Storage.set({ key: 'expenseStore', value: JSON.stringify([]) });
  }

  async addExpenseItem(value: any) {
    let expenseStore = await this.Storage.get({ key: 'expenseStore' });
    expenseStore = JSON.parse(expenseStore.value);
    (expenseStore as any).push({ ...value, id: this.generateRandomNumber() });
    const res = await this.Storage.set({
      key: 'expenseStore',
      value: JSON.stringify(expenseStore)
    });
    console.log('res', res);
  }

  async removeExpenseItem(id: number) {
    let expenseStore = await this.Storage.get({ key: 'expenseStore' });
    expenseStore = JSON.parse(expenseStore.value);
    (expenseStore as any).filter(obj => obj.id !== id);
    await this.Storage.set({
      key: 'expenseStore',
      value: JSON.stringify(expenseStore)
    });
  }

  async getAllExpenses() {
    let expenseStore = await this.Storage.get({ key: 'expenseStore' });
    expenseStore = JSON.parse(expenseStore.value);
    return (expenseStore as any)
      .slice()
      .sort((a, b) => b.date - a.date);
      // .map(obj => obj.date = new Date(obj.date));
  }

  generateRandomNumber() {
    const ranNumber = Math.floor(Math.random() * 1000000);
    return ranNumber;
  }
}
