import { Component, OnInit } from '@angular/core';
import { TITLE_1 } from 'src/app/constants';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
ngOnInit(): void {
  
}
titles=[{title:TITLE_1, url:'/draw'},{title:TITLE_1, url:'/draw'}]
}
