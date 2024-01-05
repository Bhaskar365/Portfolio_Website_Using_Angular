import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{

  workExpList:WorkExperience[] = [
    {
      role: "Software Developer",
      company: "McKinsey & Co.",
      duration: "2003-2005",
      description: [
        'Worked on different technologies such as .NET , JAVA, C++',
        'Worked with multiple teams to develop desktop and desktop applications'
      ]
    }
  ];

  ngOnInit(): void {
    
  }

}
