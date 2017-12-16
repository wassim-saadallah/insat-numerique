import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFilieresComponent } from './liste-filieres.component';

describe('ListeFilieresComponent', () => {
  let component: ListeFilieresComponent;
  let fixture: ComponentFixture<ListeFilieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFilieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFilieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
