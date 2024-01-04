import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseDetailsPage } from './house-details.page';

describe('HouseDetailsPage', () => {
  let component: HouseDetailsPage;
  let fixture: ComponentFixture<HouseDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HouseDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
