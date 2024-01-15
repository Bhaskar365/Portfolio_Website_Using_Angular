import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'Google Map, Gmail',
      technologies: 'Cloud Computing, Angular, Angular Material',
      description: [
        'Build Cloud',
        'Expanded Angular',
        'contributed to Google Drive'
      ]
    },
    {
      title: 'Google Map, Gmail',
      technologies: 'Cloud Computing, Angular, Angular Material',
      description: [
        'Build Cloud',
        'Expanded Angular',
        'contributed to Google Drive'
      ]
    },
    {
      title: 'Google Map, Gmail',
      technologies: 'Cloud Computing, Angular, Angular Material',
      description: [
        'Build Cloud',
        'Expanded Angular',
        'contributed to Google Drive'
      ]
    }, {
      title: 'Google Map, Gmail',
      technologies: 'Cloud Computing, Angular, Angular Material',
      description: [
        'Build Cloud',
        'Expanded Angular',
        'contributed to Google Drive'
      ]
    }, {
      title: 'Google Map, Gmail',
      technologies: 'Cloud Computing, Angular, Angular Material',
      description: [
        'Build Cloud',
        'Expanded Angular',
        'contributed to Google Drive'
      ]
    }
  ];

  ngOnInit(): void {

  }

}
