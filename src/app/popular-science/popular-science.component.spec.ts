import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularScienceComponent } from './popular-science.component';

describe('PopularScienceComponent', () => {
  let component: PopularScienceComponent;
  let fixture: ComponentFixture<PopularScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
