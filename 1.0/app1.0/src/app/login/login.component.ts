import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
input : {
  email: String,
  password: String
};
status:string;
constructor( private router: Router,private dataService: DataService) {
  this.input = {
      "email": "",
      "password": ""
  };
}
login():void{
  if(this.input.email && this.input.password) {

    this.dataService.getacess(this.input).then((res)=>{
           console.log(res)
           localStorage.setItem('sid',res.sid)
          if(res.message=="sucessfull"){
          this.router.navigate(['/trains'])
          }
          else{
            this.status=res.message 
            console.log(res)
            
          }

        }
         )



  }
}
  ngOnInit() {
  }

}
