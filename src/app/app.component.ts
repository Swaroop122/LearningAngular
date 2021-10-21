import { Component } from '@angular/core';
import { Employee } from 'src/models/employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'p1';

  employee:Employee;

  employeeList:Employee[];

  constructor(private httpClient:HttpClient)
  {
    console.log('We are in the constructor');
    
  }
   
  ngOnInit()
  {
  console.log('we are in the ngoninit method');
  
  this.employee=new Employee(101,'raj','sirsi',10000);
  this.httpClient.get<Employee[]>(https://localhost:44340/api/Employee').subscribe
    (list=>
      {
        this.employeeList=list;
      }
    );
  }
}
