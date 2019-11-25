import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardExpensesPage } from './dashboard-expenses.page';

describe('DashboardExpensesPage', () => {
  let component: DashboardExpensesPage;
  let fixture: ComponentFixture<DashboardExpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardExpensesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
