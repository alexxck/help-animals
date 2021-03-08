import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnimalsFindRequestsComponent } from './admin-animals-find-requests.component';

describe('AdminAnimalsFindRequestsComponent', () => {
  let component: AdminAnimalsFindRequestsComponent;
  let fixture: ComponentFixture<AdminAnimalsFindRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnimalsFindRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnimalsFindRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
