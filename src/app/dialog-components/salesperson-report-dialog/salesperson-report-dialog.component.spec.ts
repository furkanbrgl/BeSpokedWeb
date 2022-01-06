import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonReportDialogComponent } from './salesperson-report-dialog.component';

describe('SalespersonReportDialogComponent', () => {
  let component: SalespersonReportDialogComponent;
  let fixture: ComponentFixture<SalespersonReportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalespersonReportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersonReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
