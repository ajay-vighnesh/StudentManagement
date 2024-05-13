import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouchService {

  c_url:string = "https://192.168.57.185:5984";
  databaseName: string = "ajaystudentcrud";
  couchUsername: string = "d_couchdb";
  couchPassword: string = "Welcome#2";

header = {
  headers: {
    'Authorization' : 'Basic ' + btoa(this.couchUsername + ":" + this.couchPassword),
  }
}



  constructor(private http:HttpClient) { }

  create(doc:any){
    const createurl:string=`${this.c_url}/${this.databaseName}`
    return this.http.post(createurl,doc,this.header);
  }

  read(view_name:string,user:string){
    console.log(view_name,user);
    
    const readurl:string = `${this.c_url}/${this.databaseName}/_design/new/_view/${view_name}?key="${user}"`
    return this.http.get(readurl,this.header)
  }

  delete(_id:string,_rev:string){
    const deleteurl:string = `${this.c_url}/${this.databaseName}/${_id}?rev=${_rev}`
    return this.http.delete(deleteurl,this.header)
  }

  update(_id:string,_rev:string,doc:any){
    const updateurl:string = `${this.c_url}/${this.databaseName}/${_id}?rev=${_rev}`
    return this.http.put(updateurl,doc,this.header)

  }

  search(searchTearm:any,searchName: any,searchView:any){
    const searchurl:string = `${this.c_url}/${this.databaseName}/_design/${searchName}/_search/${searchView}?`;
    return this.http.post(searchurl,searchTearm,this.header)
  } 

  // getdata(){
  //   const geturl:string = `${this.c_url}/${this.databaseName}/_all_docs?include_docs=true`
  //   return this.http.get(geturl,this.header)
  // }

  getdata(view_name:string,user:string){
    
    const geturl:string = `${this.c_url}/${this.databaseName}/_design/new/_view/${view_name}?key="${user}"`
    return this.http.get(geturl,this.header)
  }

  getsignup(view_name:string,user:string){
    
    const geturl:string = `${this.c_url}/${this.databaseName}/_design/new/_view/${view_name}?key="${user}"`
    return this.http.get(geturl,this.header)
  }
 
  getsuntaskdata(view_name:string,user:string){
    
    const geturl:string = `${this.c_url}/${this.databaseName}/_design/new/_view/${view_name}?key="${user}"`
    return this.http.get(geturl,this.header)
  }

  getdeveloperdata(view_name:string,user:string){
    
    const getdevurl:string = `${this.c_url}/${this.databaseName}/_design/new/_view/${view_name}?key="${user}"`
    return this.http.get(getdevurl,this.header)
  }

  getchange(id:string){
    
    const getid:string = `${this.c_url}/${this.databaseName}/${id}`
    return this.http.get(getid,this.header)
  }

  gettask(view_name:string,user:string){
    console.log(view_name,user)
    const getstaskid:string = `${this.c_url}/${this.databaseName}/_design/new/_view/${view_name}?key="${user}"`
    return this.http.get(getstaskid,this.header)
  }


  // getViewUrl(){
  //   const url=`${this.c_url}/${this.databaseName}/_design/view/_view/name?key="aakash"`
  //   this.http.get(url,this.header).subscribe((res:any)=>{
  //     console.log(res.rows[0].value.rollNumber)
  //   })
  // }

}
