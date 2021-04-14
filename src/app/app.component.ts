import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  
    
    public employees:any = [
      {'FirstName':'Rahul','LastName':'Kapur','Salary':20.000,'Department':'Marketing'},
      {'FirstName':'David','LastName':'Lomax','Salary':18.000,'Department':'Consulting'},
      {'FirstName':'Max','LastName':'Maxwell','Salary':23.000,'Department':'Sales'},
      {'FirstName':'Sean','LastName':'Smith','Salary':20.000,'Department':'Marketing'}
  ];
  
  public maxSalary() {
      let maxSalary: Number = 0;
      for (let i = 0; i < this.employees.length; i++) {
          if (maxSalary > this.employees[i].Salary) {
                   maxSalary = maxSalary;
                }
          else {
              maxSalary = this.employees[i].Salary;
            }
         }
      return maxSalary;
  }

 
    constructor(){}
}

