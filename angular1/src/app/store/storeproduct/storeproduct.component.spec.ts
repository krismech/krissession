import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreproductComponent } from './storeproduct.component';

describe('StoreproductComponent', () => {
  let component: StoreproductComponent;
  let fixture: ComponentFixture<StoreproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreproductComponent ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
