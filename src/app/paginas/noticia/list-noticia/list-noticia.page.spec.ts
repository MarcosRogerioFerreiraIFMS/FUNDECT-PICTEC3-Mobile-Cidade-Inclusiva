import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListNoticiaPage } from './list-noticia.page';

describe('ListNoticiaPage', () => {
  let component: ListNoticiaPage;
  let fixture: ComponentFixture<ListNoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
