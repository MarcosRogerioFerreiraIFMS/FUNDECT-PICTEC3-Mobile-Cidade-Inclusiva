import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilAcessibilidadePage } from './perfil-acessibilidade.page';

describe('PerfilAcessibilidadePage', () => {
  let component: PerfilAcessibilidadePage;
  let fixture: ComponentFixture<PerfilAcessibilidadePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilAcessibilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
