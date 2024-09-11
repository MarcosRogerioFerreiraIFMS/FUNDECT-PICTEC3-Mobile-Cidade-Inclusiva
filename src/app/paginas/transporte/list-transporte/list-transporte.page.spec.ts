import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListTransportePage } from './list-transporte.page';

describe('ListTransportePage', () => {
  let component: ListTransportePage;
  let fixture: ComponentFixture<ListTransportePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListTransportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
