import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilNoticiaPage } from './perfil-noticia.page';

describe('PerfilNoticiaPage', () => {
  let component: PerfilNoticiaPage;
  let fixture: ComponentFixture<PerfilNoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
