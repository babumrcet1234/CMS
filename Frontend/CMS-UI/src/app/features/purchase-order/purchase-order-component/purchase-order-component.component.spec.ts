import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderComponentComponent } from './purchase-order-component.component';

describe('PurchaseOrderComponentComponent', () => {
  let component: PurchaseOrderComponentComponent;
  let fixture: ComponentFixture<PurchaseOrderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseOrderComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
