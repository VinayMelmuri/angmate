import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  msg!: string | null;
  errorMessage!: string | null;
  myForm!: FormGroup;
  email = new FormControl('',[Validators.required,Validators.pattern(/^[a-z]*@infy\.com$/)]);
  empno = new FormControl('',[Validators.required,Validators.pattern(/^123[0-9]{3}$/)]);
  age = new FormControl('',[Validators.required]);

  
  postEmp(){

  }

  getErrorMessage(field: any) {
    if (field == "email") {
      return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('pattern') ? 'Not a valid email' :
          '';
    } else if (field == "empNo") {
      return this.empno.hasError('required') ? 'You must enter a value' :
        this.empno.hasError('pattern') ? 'Not a valid employee number' :
          '';
    } else if (field == "age") {
      return this.age.hasError('required') ? 'You must enter a value' :
        this.age.hasError('min') ? 'minimun age is 21' :
          this.age.hasError('max') ? 'minimun age is 60' :
            '';
    }
    else{
      return null;
    }
  }
  
}
