import { Component } from '@angular/core';
import { Shoe } from './model/Shoe';
import { ShoeService } from './shoe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MicroProject1';
  // shoety : string;
  // shoesize : string;
  // shoeclr : string;
  // a :string[];
  // s : string;
  shoe : Shoe;
  result:string;
  shoeArr :Shoe[];
  flag:boolean;

  constructor(private service : ShoeService){
    // this.shoety = "";
    // this.shoesize = "";
    // this.shoeclr = "";
    // this.s="";
    // this.a=[ ];
    this.shoe = new Shoe();
    this.result="";
    this.shoeArr=[];
    this.flag=false;
  }

  // save(){
  //   this.s= this.shoety+" - "+this.shoesize+" - "+this.shoeclr+"";
  //   this.a.push(this.s);
  // }

insertvalues(data : any){
  this.shoe.id=data.shoeod;
  this.shoe.Typ = data.shoetyp;
  this.shoe.Size = data.shoesz;
  this.shoe.Clr =  data.shoecl;
  alert(data.shoetyp+" "+data.shoesz+" "+data.shoecl);
  this.result=this.service.insertvalues(this.shoe);
}

updatevalues(data : any){
  this.shoe.id=data.shoeod;
  this.shoe.Typ = data.shoetyp;
  this.shoe.Size = data.shoesz;
  this.shoe.Clr =  data.shoecl;
  alert(data.shoetyp+" "+data.shoesz+" "+data.shoecl);
  this.result=this.service.updatevalues(this.shoe);
}

deletevalues(data : any){
  this.result=this.service.deletevalues(data.shoeod);
}

findvalues(data : any){
  this.shoe = this.service.findvalues(data.shoeod);
  this.result= data.shoetyp+" "+data.shoesz+" "+data.shoecl;
}

findallvalues(){
  this.shoeArr=this.service.findallvalues();
  this.flag=true;
}

}
