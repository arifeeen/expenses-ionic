import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  dbObject: SQLiteObject;
  readonly databaseName = 'expense_management.db';
  readonly tableName = 'expense_table';

  constructor(private sqLite: SQLite , private platform: Platform) {
    this.platform.ready().then(() => {
      this.createDB();
    });
  }

  createDB() {
    this.sqLite
      .create({
        name: this.databaseName,
        location: 'default'
      })
      .then((res: SQLiteObject) => {
        this.dbObject = res;
        console.log('database created');
      }).catch(err => {
        console.log('db cannot be created');
      });
  }

  createTable() {
    // tslint:disable-next-line: max-line-length
    return this.dbObject
      .executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          this.tableName +
          ' (pid INTEGER PRIMARY KEY, expensefor varchar(255),amount decimal(60,2),currency varchar(5),date DATE)',
        []
      );
  }

  insertData(expenseFor, amount, currency, date) {
    return this.dbObject.executeSql(`insert into  ${this.tableName} values (${expenseFor},${amount},${currency},${date})`, []);
  }

  getRows() {
    return this.dbObject.executeSql(`select * from ${this.tableName}`, []);
  }

  deleteRow(item) {
    return this.dbObject.executeSql(`delete from ${this.tableName} where pid = ${item.pid}`), [];
  }
}
