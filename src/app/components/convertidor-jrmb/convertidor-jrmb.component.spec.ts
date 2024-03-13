import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorJrmbComponent } from './convertidor-jrmb.component';

describe('ConvertidorJrmbComponent', () => {
  let component: ConvertidorJrmbComponent;
  let fixture: ComponentFixture<ConvertidorJrmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertidorJrmbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertidorJrmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
