import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationUiComponent } from './navigation-ui.component';

describe('NavigationUiComponent', () => {
  let component: NavigationUiComponent;
  let fixture: ComponentFixture<NavigationUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
