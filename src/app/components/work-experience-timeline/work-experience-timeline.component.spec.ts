import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceTimelineComponent } from './work-experience-timeline.component';

describe('WorkExperienceTimelineComponent', () => {
  let component: WorkExperienceTimelineComponent;
  let fixture: ComponentFixture<WorkExperienceTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
