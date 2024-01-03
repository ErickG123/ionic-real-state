import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LetsStartPage } from './lets-start.page';

describe('LetsStartPage', () => {
  let component: LetsStartPage;
  let fixture: ComponentFixture<LetsStartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LetsStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
