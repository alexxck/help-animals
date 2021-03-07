import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuNewComponent } from './nav-menu-new.component';

describe('NavMenuPublicComponent', () => {
  let component: NavMenuNewComponent;
  let fixture: ComponentFixture<NavMenuNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
