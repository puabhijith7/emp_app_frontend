export class Emp {
     emp_id: number=0;
     emp_name: string='';
     emp_gender: string='';
     emp_age: number=0;
     emp_designation: string='';
  
    constructor(
     
      emp_name: string,
      emp_gender: string,
      emp_age: number,
      emp_designation: string
    ) {
      
      this.emp_name = emp_name;
      this.emp_gender = emp_gender;
      this.emp_age = emp_age;
      this.emp_designation = emp_designation;
    }
}