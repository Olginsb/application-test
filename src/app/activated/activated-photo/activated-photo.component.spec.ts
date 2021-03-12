import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedPhotoComponent } from './activated-photo.component';

describe('ActivatedPhotoComponent', () => {
  let component: ActivatedPhotoComponent;
  let fixture: ComponentFixture<ActivatedPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
