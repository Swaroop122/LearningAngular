import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p2';
  name='Pragim Tech';
  location='Banglore';
  establishedDate=new Date(2007,9,10);
  revenue=10000;

  employeeList: Employee[];
  searchText: string;

  ngOnInit()
  {
    this.employeeList=new Array<Employee>(
      new Employee(101,'Swaroop','Banglore',12345),
      new Employee(102,'lokesh','Chennai',345),
      new Employee(103,'rakesh','Pune',45),
      new Employee(104,'pranav','Hyderabad',5),
      new Employee(105,'tarik','Mumbai',12345878)

    );
  }
}
class Employee
{
    Id:number;
    Name:string;
    Location:string;
    Salary:number;

    constructor(id:number,name:string,location:string,salary:number)
      {
          this.Id=id;
          this.Name=name;
          this.Location=location;
          this.Salary=salary;
      }
}
