import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListManutencaoPage } from './list-manutencao.page';

describe('ListManutencaoPage', () => {
  let component: ListManutencaoPage;
  let fixture: ComponentFixture<ListManutencaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListManutencaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
