import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Emp } from '../Emp';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  @Output() flag: EventEmitter<number> = new EventEmitter<number>();

  constructor(private s:EmpServiceService) { }

  ngOnInit(): void {
  }

  emp_name:string='';
  emp_gender:string=''
  emp_designation:string=''
  emp_age!: number;

  back():void{
    this.flag.emit(1);
  }
  
 
  add():void{
   if((this.emp_name.length>3)&&(this.emp_age>18)&&(this.emp_designation.length>1)&&(this.emp_gender.length>3))
   {
   const a=new Emp(this.emp_designation,this.emp_name,this.emp_age,this.emp_gender);
   this.s.add(a).subscribe(
    (response: any) => {   
      console.log(response)
      this.flag.emit(1);
  },
  (error) => {
    console.error(error);
    
  }
);

  }
  else
  {
    alert("Fill Details Properly")
  }
}
 

}
