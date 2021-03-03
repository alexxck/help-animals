import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnimalDetailsComponent } from './admin-animal-details.component';

describe('AdminAnimalDetailsComponent', () => {
  let component: AdminAnimalDetailsComponent;
  let fixture: ComponentFixture<AdminAnimalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnimalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
