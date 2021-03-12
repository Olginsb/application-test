import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedPostsComponent } from './activated-posts.component';

describe('ActivatedPostsComponent', () => {
  let component: ActivatedPostsComponent;
  let fixture: ComponentFixture<ActivatedPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
