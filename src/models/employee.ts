export class Employee
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