import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

   //Asi se puede crear un formulario de manera manual     ---- a mi me gusta mas esta
  // public myForm: FormGroup = new FormGroup({
  //   name:  new FormControl('',[Validators.required,Validators.minLength(3)]),
  //   price:  new FormControl(0,[Validators.required,Validators.min(0)]),
  //   inStorage:  new FormControl(0,[Validators.required,Validators.min(0)]),
  // })

  //Y así se crea con el form builder
  public myForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      price: [0,[Validators.required,Validators.min(0)]],
      inStorage: [0,[Validators.required,Validators.min(0)]]
    })
  }

  onSave():void{
    if(this.myForm.invalid) return;
    console.log(this.myForm.value);

    this.myForm.reset();
  }

}
