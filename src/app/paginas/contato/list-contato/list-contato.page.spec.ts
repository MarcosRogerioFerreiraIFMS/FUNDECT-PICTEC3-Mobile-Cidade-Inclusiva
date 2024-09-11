import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListContatoPage } from './list-contato.page';

describe('ListContatoPage', () => {
  let component: ListContatoPage;
  let fixture: ComponentFixture<ListContatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListContatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
