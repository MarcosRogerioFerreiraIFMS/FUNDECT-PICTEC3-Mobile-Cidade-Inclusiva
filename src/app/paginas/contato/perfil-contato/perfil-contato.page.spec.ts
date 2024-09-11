import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilContatoPage } from './perfil-contato.page';

describe('PerfilContatoPage', () => {
  let component: PerfilContatoPage;
  let fixture: ComponentFixture<PerfilContatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilContatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
