import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Emp } from '../Emp';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  @Output() flag: EventEmitter<number> = new EventEmitter<number>();

  constructor(private s:EmpServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  emp_name:string='';
  emp_gender:string=''
  emp_designation:string=''
  emp_age!: number;

  back():void{
   // this.flag.emit(1);
   this.router.navigate(['/'])
  }
  
 
  add():void{
   if((this.emp_name.length>0)&&(this.emp_age>18)&&(this.emp_designation.length>1)&&(this.emp_gender.length>3))
   {
   const a=new Emp(this.emp_designation,this.emp_name,this.emp_age,this.emp_gender);
   this.s.add(a).subscribe(
    (response: any) => {   
      console.log(response)
      //this.flag.emit(1);
      this.router.navigate(['/'])
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
