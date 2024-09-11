import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilTransportePage } from './perfil-transporte.page';

describe('PerfilTransportePage', () => {
  let component: PerfilTransportePage;
  let fixture: ComponentFixture<PerfilTransportePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilTransportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
