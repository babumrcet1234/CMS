import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMasterComponentComponent } from './product-master-component.component';

describe('ProductMasterComponentComponent', () => {
  let component: ProductMasterComponentComponent;
  let fixture: ComponentFixture<ProductMasterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMasterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMasterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
