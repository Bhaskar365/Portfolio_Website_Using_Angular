import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveDirective } from './directives/responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    WorkExperienceComponent,
    BannerComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
