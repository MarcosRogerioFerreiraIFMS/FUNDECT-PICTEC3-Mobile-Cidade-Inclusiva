import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAcessibilidadePage } from './list-acessibilidade.page';

describe('ListAcessibilidadePage', () => {
  let component: ListAcessibilidadePage;
  let fixture: ComponentFixture<ListAcessibilidadePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListAcessibilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
