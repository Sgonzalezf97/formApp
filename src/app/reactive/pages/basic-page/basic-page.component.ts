import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit{

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

  ngOnInit(): void {

  }

  isValidField(field:string): boolean | null{
    return this.myForm.controls[field].errors &&
    this.myForm.controls[field].touched
  }

  getFieldError(field:string):string | null{
    if (!this.myForm.controls[field]) return null

    const errors = this.myForm.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
      switch(key){
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
      }
    }
    return null;
  }

  onSave():void{
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched;
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset({ price:0, inStorage:0});
  }

}
