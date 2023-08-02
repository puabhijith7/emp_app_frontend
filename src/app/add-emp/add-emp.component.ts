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
  
 
  add():void{
   
   const a=new Emp(this.emp_name,this.emp_gender,this.emp_age,this.emp_designation);
   this.s.add(a).subscribe(
    (response: any) => {   
      console.log(response)
      this.flag.emit(1);
  },
  (error:any) => {
    console.error(error);
    
  }
);

  }

}
