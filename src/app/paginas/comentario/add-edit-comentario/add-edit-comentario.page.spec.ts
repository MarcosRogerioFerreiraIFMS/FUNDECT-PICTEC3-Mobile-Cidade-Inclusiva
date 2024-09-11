import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditComentarioPage } from './add-edit-comentario.page';

describe('AddEditComentarioPage', () => {
  let component: AddEditComentarioPage;
  let fixture: ComponentFixture<AddEditComentarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditComentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
