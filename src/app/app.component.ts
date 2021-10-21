import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'one';

  constructor()
  {
    this.testfunction();
  }
  testfunction()
  {
    var x=1223;
    var x=13;
    let list=[1,2,3];
    for(let e in list)
    {
      console.log(e);
    }
    for(let e of list)
    {
      console.log(e);
    }
    for(var i=1;i<=3;i++)
    {
      console.log('i value is'+i);
    }
    console.log('i value'+i);
    
    //if(res)
    //{
    //  console.log('yes');
    //}
    //else{
    //  console.log('no');
    //}
    //var res=2;
    
  }
 

  
}