import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Emp } from '../Emp';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  @Input() inputData!: Emp ;
  @Output() flag1: EventEmitter<number> = new EventEmitter<number>();
  emp_name:string=''
  emp_age!:number
  emp_designation:string=''
  emp_gender:string=''
  emp_id!:number
  constructor(private service:EmpServiceService) { }
   
  ngOnInit(): void {
    this.emp_age=this.inputData.emp_age
    this.emp_designation=this.inputData.emp_designation
    this.emp_gender=this.inputData.emp_gender
    this.emp_name=this.inputData.emp_name
    
    
  }
  back():void{
    this.flag1.emit(1);
  }
  update():void{
    const e=new Emp(this.emp_name,this.emp_gender,this.emp_age,this.emp_designation)
    e.emp_id=this.inputData.emp_id
    console.log(e)
    console.log(this.inputData)
//     const areEqual = JSON.stringify(e) == JSON.stringify(this.inputData);
// console.log(areEqual);
    
    if((e.emp_name!=this.inputData.emp_name)||(e.emp_age!=this.inputData.emp_age)||(e.emp_gender!=this.inputData.emp_gender)||(e.emp_designation!=this.inputData.emp_designation))
    {
    this.service.update(e).subscribe(
      (response:Emp)=>{
       
        console.log(response)     
        this.flag1.emit(1)   
       
        alert("Updated Successfully")
       
        
      },
      (error) => {
        console.error(error);
        
      }
    );
    }
    else
    {
      alert("No Changes Made!!!")
    }
  }

}
