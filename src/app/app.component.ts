import { Component } from '@angular/core';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p1';

  employee:Employee;

  constructor()
  {
    this.employee=new Employee(101,'raj','sirsi',10000);
  }
}
