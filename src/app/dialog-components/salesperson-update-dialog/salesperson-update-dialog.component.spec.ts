import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonUpdateDialogComponent } from './salesperson-update-dialog.component';

describe('SalespersonUpdateDialogComponent', () => {
  let component: SalespersonUpdateDialogComponent;
  let fixture: ComponentFixture<SalespersonUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalespersonUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersonUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
