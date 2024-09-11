import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditManutencaoPage } from './add-edit-manutencao.page';

describe('AddEditManutencaoPage', () => {
  let component: AddEditManutencaoPage;
  let fixture: ComponentFixture<AddEditManutencaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditManutencaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
