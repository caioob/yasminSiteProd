import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotos2Component } from './fotos2.component';

describe('Fotos2Component', () => {
  let component: Fotos2Component;
  let fixture: ComponentFixture<Fotos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fotos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fotos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
