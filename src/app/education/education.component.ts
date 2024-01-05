import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList:Education[] = [
    {
      institute: "STANFORD UNIVERSITY",
      course: "MBA",
      duration: "2003-2005",
      score: "80%"
    },
    {
      institute: "MIT",
      course: "MS CS",
      duration: "1996-1998",
      score: "89%"
    },
    {
      institute: "IIT-M",
      course: "BTECH IT",
      duration: "1992-1996",
      score: "98%"
    },
    {
      institute: "HS",
      course: "HSLC",
      duration: "1990-1992",
      score: "90%"
    },
    {
      institute: "SCHOOL",
      course: "SSC",
      duration: "1978-1990",
      score: "88%"
    }
  ];

  ngOnInit(): void {
    
  }

}
