import { Injectable } from '@angular/core';
import { Shoe } from './model/Shoe';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  url:string;
  shoe : Shoe;
  shoeArr:Shoe[];
  constructor(private http:HttpClient) { 
    this.url="http://localhost:3005/shoepurchase";
    this.shoe = new Shoe();
    this.shoeArr=[];
  }

  insertvalues(shoe : Shoe){
    this.http.post<Shoe>(this.url,  shoe).subscribe();
    return "Shoe purchase details is inserted";
  }

  updatevalues(shoe : Shoe){
    this.http.put<Shoe>(this.url+"/"+shoe.id,  shoe).subscribe();
    return "Shoe purchase details is updated";
  }

  deletevalues(Id : string){
    this.http.delete<Shoe>(this.url+"/"+Id).subscribe();
    return "Shoe purchase details is deleted";
  }

  findvalues(Id : string){
    this.http.get<Shoe>(this.url+"/"+Id).subscribe(data =>this.shoe =data);
    return this.shoe;
  }

  findallvalues(){
    this.http.get<Shoe[]>(this.url).subscribe(data =>this.shoeArr = data);
    return this.shoeArr;
  }

}
