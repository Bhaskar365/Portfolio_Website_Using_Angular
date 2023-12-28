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
    'Hi sofwejlkjwelkfjwelkfj wlkejflkwejflkwejfkl;wjef;lkwjef;lkjweflkjwe;lfjwe;if jwlkejflkwejflkjwefj ',
    'asdkfj hldfhelk ejlkf elkfj elkf jelf ej'
  ];

  constructor() { }

  ngOnInit(): void {
    
  }


}

