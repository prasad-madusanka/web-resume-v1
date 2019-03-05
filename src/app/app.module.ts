import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { PageComponent } from './components/page/page.component';

import { ParticlesModule } from 'angular-particle';
import { WorkExperienceTimelineComponent } from './components/work-experience-timeline/work-experience-timeline.component';
import { EducationTimelineComponent } from './components/education-timeline/education-timeline.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PageComponent,
    WorkExperienceTimelineComponent,
    EducationTimelineComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    NgCircleProgressModule.forRoot({
      backgroundOpacity: 1,
      backgroundStrokeWidth: 0,
      backgroundPadding: 18,
      
      radius: 50,
     
      toFixed: 0,
      maxPercent: 1000,

      unitsFontSize: "14",
      titleFontSize: "15",
      subtitleFontSize: "15",

      imageHeight: 137,
      imageWidth: 141,

      showSubtitle: false,

      space: -5,
      outerStrokeWidth: 5,
      innerStrokeWidth: 5,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
