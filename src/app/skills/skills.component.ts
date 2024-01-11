import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  skills: Skill[] = [
    {
      name:'Angular, Angular Material',
      level: 'Expert',
      rating:95
    },
    {
      name: 'ASP.NET Core, EF Core',
      level: 'Intermediate',
      rating : 75
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90
    },
    {
      name : 'Java',
      level: 'Expert',
      rating: 90
    },
    {
      name:'C++',
      level:'Intermediate',
      rating:80
    }
  ];

  ngOnInit(): void {
    
  }

}
