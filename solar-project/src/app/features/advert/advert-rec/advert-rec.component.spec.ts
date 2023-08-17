import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertRecComponent } from './advert-rec.component';

describe('AdvertRecComponent', () => {
  let component: AdvertRecComponent;
  let fixture: ComponentFixture<AdvertRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
