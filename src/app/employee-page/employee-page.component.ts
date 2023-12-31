
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  flag1:number=0
  n:number=0
  e1!:Emp
  constructor(private service:EmpServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getall();
   
  }
  // flagset():void{
  //   this.flag=0
  //   console.log("hai")
  //   this.getall();
  // }
  // flagset1():void{
  //   this.flag1=0
  //   console.log("hello")
  //   this.getall();
  // }
  add():void{
  // this.flag=1
  this.router.navigate(['/add'])
  }
  // up():void{
  //   this.flag1=1
  //  }
  getall():void{
   
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
       console.log(e)
       
      
       console.log(JSON.stringify(this.e1))
     //  this.flag1=1  
     this.router.navigate(['/update']);
     this.service.emp=e
    }
  }

