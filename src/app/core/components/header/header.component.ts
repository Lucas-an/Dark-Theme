import { Component, OnInit } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
 public icon:string = ETheme.ICON_MOON;

 constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public toggle(){
   const theme = document.body.classList.toggle('dark-theme');//Quando clicar no botão vai ficar dark vindo da class no css
   if(theme) {
    return(this.icon = ETheme.ICON_SUN);
   } else {
    return (this.icon = ETheme.ICON_MOON)
   }
  }

}
