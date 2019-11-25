export class Expense {
  constructor(
    public pid: string,
    public expensefor: string,
    public amount: Number,
    public currency: string,
    public date: Date
  ) {}
}
