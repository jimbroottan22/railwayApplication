import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status:String;
  input : {
    email: String,
    name: String,
    age:number,
    address:string,
    password:string
  }; 
    public constructor( private router: Router,private dataService: DataService) {
        this.input = {
            "name": "",
            "age": 0,
            "email": "",
            "password": "",
            'address':''
        };
    }
    public register() {

    
      if(this.input.email && this.input.password) {

         this.dataService.setAccount(this.input).then((res)=>{
           console.log(res)
          if(res.message=="sucessfull"){
          this.router.navigate(['/login'])
          }
          else{
            this.status=res.message;
            
          }

        }
         )
         
      }
  }
  ngOnInit() {
  }

}
