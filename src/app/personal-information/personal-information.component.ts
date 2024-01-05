import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{

  myData : string [][] = [
    ['Name', 'Sundar Pichai'],
    ['DOB', '10/06/1972'],
    ['Work Exp', '25 Years'],
    ['Education', 'M.S. (1995)'],
    ['Interests', 'Cricket']
  ];

//test text

  aboutMe:string[] = [
    'Software develeoper for 25 years . Currently CEO of Google LLC',
    'Software develeoper for 25 years . Currently CEO of Google LLC',
    'Software develeoper for 25 years . Currently CEO of Google LLC',
    'Software develeoper for 25 years . Currently CEO of Google LLC',
    'Software develeoper for 25 years . Currently CEO of Google LLC'
  ];

  constructor() { }

  ngOnInit(): void {
    
  }


}

