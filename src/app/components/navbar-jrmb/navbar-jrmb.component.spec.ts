import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarJrmbComponent } from './navbar-jrmb.component';

describe('NavbarJrmbComponent', () => {
  let component: NavbarJrmbComponent;
  let fixture: ComponentFixture<NavbarJrmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarJrmbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarJrmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
