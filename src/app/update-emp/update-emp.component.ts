import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Emp } from '../Emp';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  // @Input() inputData!: Emp ;
  // @Output() flag1: EventEmitter<number> = new EventEmitter<number>();
  emp_name:string=''
  emp_age:number=0
  emp_designation:string=''
  emp_gender:string=''
 
  constructor(private service:EmpServiceService,private router:Router) { 
   
  }
   
  ngOnInit(): void {
    // this.emp_age=this.inputData.emp_age
    // this.emp_designation=this.inputData.emp_designation
    // this.emp_gender=this.inputData.emp_gender
    // this.emp_name=this.inputData.emp_name   
    // console.log("init")
    this.emp_name=this.service.emp.emp_name
    this.emp_age=this.service.emp.emp_age
    this.emp_designation=this.service.emp.emp_designation
    this.emp_gender=this.service.emp.emp_gender
    
  }
  // ngOnChanges() {
  //   this.emp_age=this.inputData.emp_age
  //   this.emp_designation=this.inputData.emp_designation
  //   this.emp_gender=this.inputData.emp_gender
  //   this.emp_name=this.inputData.emp_name
  //   console.log(this.inputData)
  //   console.log("NgonChanges")
  // }
  back():void{
    //this.flag1.emit(1);
    this.router.navigate(['/'])
  }
  update():void{
    if((this.emp_name.length>0)&&(this.emp_age>18)&&(this.emp_designation.length>1)&&(this.emp_gender.length>3))
    {
    const e=new Emp(this.emp_designation,this.emp_name,this.emp_age,this.emp_gender)
    e.emp_id=this.service.emp.emp_id
     console.log(JSON.stringify(e))
     console.log(JSON.stringify(this.service.emp));
     const areEqual = JSON.stringify(e) == JSON.stringify(this.service.emp); 
   console.log(areEqual);
    
    if((e.emp_name!=this.service.emp.emp_name)||(e.emp_age!=this.service.emp.emp_age)||(e.emp_gender!=this.service.emp.emp_gender)||(e.emp_designation!=this.service.emp.emp_designation))
  // if(!(JSON.stringify(e) != JSON.stringify(this.inputData)))
   {
    this.service.update(e).subscribe(
      (response:Emp)=>{
       
        console.log(response)     
       // this.flag1.emit(1)   
       
        alert("Updated Successfully")
        this.router.navigate(['/'])
       
        
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
  else{
    alert("Fill Details Properly")
  }
}

}
