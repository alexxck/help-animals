import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSizeHeaderComponent } from './full-size-header.component';

describe('FullSizeHeaderComponent', () => {
  let component: FullSizeHeaderComponent;
  let fixture: ComponentFixture<FullSizeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullSizeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullSizeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
