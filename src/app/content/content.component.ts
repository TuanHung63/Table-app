import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  products:any=[];
  cols=['id','firstName','lastName','email','birthday','salary'];
  selected:FormControl=new FormControl('default');


  constructor(private _http:HttpClient,
              private _service:ServiceService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //     for(let product of this.products){
    //       console.log(product);          
    //     }      
    // }, 3000);
    
    this._service.getJSON().subscribe(
      (data)=>{
        this.products=data;
        for(let product of this.products){
          product.phone="(+84)"+product.phone.replaceAll("-","");
        }
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
    
  }
  onSortTable(selected:string){
    // console.log(selected);
    this.sortToProperty(selected)
  }
  sortToProperty(property:string){
    this.products.sort(
      function(a:any,b:any){
        return a[property]>b[property]?1:(a[property]<b[property]?-1:0);
        
      }
      
    )

  }

}
