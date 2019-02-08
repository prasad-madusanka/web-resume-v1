import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education-timeline',
  templateUrl: './education-timeline.component.html',
  styleUrls: ['./education-timeline.component.scss']
})
export class EducationTimelineComponent implements OnInit {

  @Input() data

  constructor() { }

  ngOnInit() {
  }

}
