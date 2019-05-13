import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public formModel: any = {};

  public onClickSubmit(formData): void{
    if(formData.valid){
      var name = formData.value.fname + " " + formData.value.lname ;
      var email = formData.value.email;
      alert("Submitted: \n Name: " + name + "\n Email: " + email);
    }else{
      formData.controls.fname.touched = true;
      formData.controls.lname.touched = true;
      formData.controls.email.touched = true;
    }
  }
}
