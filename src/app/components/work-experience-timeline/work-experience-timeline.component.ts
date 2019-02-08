import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-work-experience-timeline',
  templateUrl: './work-experience-timeline.component.html',
  styleUrls: ['./work-experience-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceTimelineComponent implements OnInit {

  @Input() data

  constructor() { }

  ngOnInit() {
  }



}
