import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/APIServices/auth.service';
import { ProductsService } from 'src/app/APIServices/products.service';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {


  CategoryForm!:FormGroup;//declare formgroup
  userService: any;
  constructor(private fb:FormBuilder,private auth:AuthService,
    private router: Router,
    private productService: ProductsService
  ){
 
      this.CategoryForm = new FormGroup({
       Name: new FormControl('')  ,
        Status: new FormControl('')  
      });
    


  } //inject form builder
   
  ngOnInit():void{

    // this.CategoryForm=this.fb.group({
    //   CategoryName:['',Validators.required],
    //   // Status:['',Validators.required]
    //   Status: new FormControl('')
    // })
  }

  onAddCategory(){
    if(this.CategoryForm.valid){
      console.log(this.CategoryForm.value)
      //send the object to db
    this.productService.addCategory(this.CategoryForm.value)
    .subscribe({
      next:(res=>{  
        console.log(res)
        alert(res.data)
        this.CategoryForm.reset();

        //send data to nav component
        this.userService.setCategoryName(res.data.name);
      })
      ,error:(err=>{
        alert(err?.error.message)
      })
    })
   
  
console.log(this.CategoryForm.value)
    }else{
      console.log('form is not valid');
      console.log(this.CategoryForm)
      ValidateForm.validateAllFormFields(this.CategoryForm);
      alert('Invlid Form ')
      //throw error using toaster and with required field
    }
  
  }
}
