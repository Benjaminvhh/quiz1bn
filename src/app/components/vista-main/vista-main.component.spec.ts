import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMainComponent } from './vista-main.component';

describe('VistaMainComponent', () => {
  let component: VistaMainComponent;
  let fixture: ComponentFixture<VistaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
