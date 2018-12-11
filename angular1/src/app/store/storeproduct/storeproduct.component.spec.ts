import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductComponent } from './storeproduct.component';

describe('StoreproductComponent', () => {
  let component: StoreProductComponent;
  let fixture: ComponentFixture<StoreProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductComponent ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
