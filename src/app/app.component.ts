import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import {menu} from './menu'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza';

  menuItems: menu[] = [{menuItem: "Chicken fingers", category: "Dinner", price: 11.99},
  {menuItem: "Pizza", category: "Dinner", price: 11.99}, {menuItem: "Wings", category: "Sides", price: 8.99},
  {menuItem: "Breadsticks", category: "Sides", price: 4.99}, {menuItem: "Ceasar Salad", category: "Salads", price: 5.99},
  {menuItem: "Cinnamon Roll", category: "Dessert", price: 8.99}]
    }

    //this was my attempt on trying get it to list each item underneath the items category
    //I just returns a blank page it runs but shows nothing
    
    /*let  a: AppComponent = new AppComponent();
      let m1: menu =  a.menuItems[0];
      let m2: menu =  a.menuItems[1];
      let m3: menu =  a.menuItems[2];
      let m4: menu =  a.menuItems[3];
      let m5: menu =  a.menuItems[4];
      let m6: menu =  a.menuItems[5];
      for(let i=0; i< a.menuItems.length; i++ ){
        if( m1.category==="Dinner" || m2.category==="Dinner" || m3.category==="Dinner" || m4.category==="Dinner" || m5.category==="Dinner" || m6.category =="Dinner"){
          (<HTMLInputElement>document.getElementById("dItem")).innerText = "{{item.menuItem}}";
      
          (<HTMLInputElement>document.getElementById("dPrice")).innerText ="{{item.price}}";
        }
      
        if(m1.category==="Sides" || m2.category==="Sides" || m3.category==="Sides" || m4.category==="Sides" || m5.category==="Sides" || m6.category === "Sides"){
          (<HTMLInputElement>document.getElementById("sideItem")).innerText = "{{item.menuItem}}";
      
          (<HTMLInputElement>document.getElementById("sidePrice")).innerText ="{{item.price}}";
        }
      
        if(m1.category==="Salads" || m2.category==="Salads" || m3.category==="Salads" || m4.category==="Salads" || m5.category==="Salads" || m6.category === "Salads"){
          (<HTMLInputElement>document.getElementById("sItem")).innerText = "{{item.menuItem}}";
      
          (<HTMLInputElement>document.getElementById("sPrice")).innerText ="{{item.price}}";
        }
      
        if(m1.category==="Dessert" || m2.category==="Dessert" || m3.category==="Dessert" || m4.category==="Dessert" || m5.category==="Dessert" || m6.category === "Dessert"){
          (<HTMLInputElement>document.getElementById("desItem")).innerText = "{{item.menuItem}}";
      
          (<HTMLInputElement>document.getElementById("desPrice")).innerText ="{{item.price}}"
        }
      }*/


      

