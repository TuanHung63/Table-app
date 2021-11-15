import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any=[];

  constructor(private _http:HttpClient) { 
    
  }

  ngOnInit(): void {
    
      // this._http.get('./assets/users.json').subscribe(
      //   (data)=>{
      //     this.products=data;
          
          
      //   },
      //   (error)=>{
      //     console.log(error);
          
      //   }
      // )
      
      
      
      
      

    }
    

    
  


  

}
