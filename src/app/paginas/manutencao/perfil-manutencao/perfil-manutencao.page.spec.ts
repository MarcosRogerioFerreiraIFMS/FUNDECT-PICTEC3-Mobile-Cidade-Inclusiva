import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilManutencaoPage } from './perfil-manutencao.page';

describe('PerfilManutencaoPage', () => {
  let component: PerfilManutencaoPage;
  let fixture: ComponentFixture<PerfilManutencaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilManutencaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
