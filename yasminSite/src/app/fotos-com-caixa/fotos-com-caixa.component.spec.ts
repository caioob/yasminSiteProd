import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosComCaixaComponent } from './fotos-com-caixa.component';

describe('FotosComCaixaComponent', () => {
  let component: FotosComCaixaComponent;
  let fixture: ComponentFixture<FotosComCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosComCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosComCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
