import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/APIServices/auth.service';
import { UserService } from 'src/app/APIServices/user.service';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.css']
})
export class SaleProductsComponent {

  constructor( private router: Router,private authService:AuthService) { }

  
  
}
