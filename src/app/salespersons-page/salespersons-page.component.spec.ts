import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonsPageComponent } from './salespersons-page.component';

describe('SalespersonsPageComponent', () => {
  let component: SalespersonsPageComponent;
  let fixture: ComponentFixture<SalespersonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalespersonsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
