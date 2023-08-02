
import { Component, OnInit } from '@angular/core';
import { Emp } from '../Emp';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {
  AllEmp: Emp[]=[];
  flag:number=0
  n:number=0
  constructor(private service:EmpServiceService) { }

  ngOnInit(): void {
    this.getall();
   
  }
  flagset():void{
    this.flag=0
    console.log("hai")
    this.getall();
  }
  add():void{
   this.flag=1
  }
  getall():void{
    this.flag=0
    this.service.getall().subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          console.log(response)
          this.AllEmp = response as Emp[];
        } else {
          console.log("Invalid response format");
        }
      },
      (error) => {
        console.error(error);
        
      }
    );}
    delete(i:number):void{
      this.service.delete(i).subscribe(
        (response: any) => {               
            console.log(response)
            this.getall();
            alert("Deleted Successfully")
          },       
        (error) => {
          console.error(error);
          
        }
      );

    }
    update(e:Emp,i:number):void{
      this.service.update(e).subscribe(
        (response:Emp)=>{
          console.log(this.AllEmp[i])
          console.log(response)        
          this.getall();
          alert("Updated Successfully")
         
          
        },
        (error: any) => {
          console.error(error);
          
        }
      );
    }
  }

