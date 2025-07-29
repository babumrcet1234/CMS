import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnComponentComponent } from './grn-component.component';

describe('GrnComponentComponent', () => {
  let component: GrnComponentComponent;
  let fixture: ComponentFixture<GrnComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrnComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
