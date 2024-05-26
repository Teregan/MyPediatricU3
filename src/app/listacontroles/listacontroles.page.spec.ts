import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListacontrolesPage } from './listacontroles.page';

describe('ListacontrolesPage', () => {
  let component: ListacontrolesPage;
  let fixture: ComponentFixture<ListacontrolesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacontrolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
