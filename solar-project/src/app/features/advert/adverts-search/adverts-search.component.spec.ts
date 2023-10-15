import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsSearchComponent } from './adverts-search.component';

describe('AdvertsSearchComponent', () => {
  let component: AdvertsSearchComponent;
  let fixture: ComponentFixture<AdvertsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
