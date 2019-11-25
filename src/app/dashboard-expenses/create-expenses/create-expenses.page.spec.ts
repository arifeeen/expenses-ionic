import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateExpensesPage } from './create-expenses.page';

describe('CreateExpensesPage', () => {
  let component: CreateExpensesPage;
  let fixture: ComponentFixture<CreateExpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExpensesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
