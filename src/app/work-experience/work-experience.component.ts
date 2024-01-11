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
      role: "CEO",
      company: "McKinsey & Co.",
      duration: "2019-Present",
      description: [
        'Worked on different technologies such as .NET , JAVA, C++',
        'Worked with multiple teams to develop desktop and desktop applications'
      ]
    },
    {
      role: "Senior Vice President",
      company: "McKinsey & Co.",
      duration: "2012-2019",
      description: [
        'Worked on different technologies such as .NET , JAVA, C++',
        'Worked with multiple teams to develop desktop and desktop applications'
      ]
    },
    {
      role: "Vice President",
      company: "McKinsey & Co.",
      duration: "2008-2012",
      description: [
        'Worked on different technologies such as .NET , JAVA, C++',
        'Worked with multiple teams to develop desktop and desktop applications'
      ]
    },
    {
      role: "Product Manager",
      company: "McKinsey & Co.",
      duration: "2005-2008",
      description: [
        'Worked on different technologies such as .NET , JAVA, C++',
        'Worked with multiple teams to develop desktop and desktop applications'
      ]
    },
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
