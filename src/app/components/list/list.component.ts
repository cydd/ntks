import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ChangeDetectorRef } from '@angular/core'
import {NgZone} from '@angular/core';


interface ItemData {
  id: string;
  username: string;
  password: string;
  emailaddress: string;
  phone:string;
}

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class LISTComponent implements OnInit {

  constructor(private fb: FormBuilder,public http:HttpClient,private msg: NzMessageService,public changeDetectorRef:ChangeDetectorRef,private zone: NgZone ) {}
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
    const data=new HttpParams()
    .set('username', this.editCache[id].data.username)
    .set('password', this.editCache[id].data.password)
    .set('phonenumber', this.editCache[id].data.phone)
    .set('emailaddress', this.editCache[id].data.emailaddress)
    var Res:string="";
    this.http.post<any>("http://localhost:9001/user/ins", data)
    .subscribe()
  }

  DeleteEdit(id: string): void {
    
    const data=new HttpParams()
    .set('username', this.editCache[id].data.username)
    .set('password', this.editCache[id].data.password)
    .set('phonenumber', this.editCache[id].data.phone)
    .set('emailaddress', this.editCache[id].data.emailaddress)
    var Res:string="";
    this.http.post<any>("http://localhost:9001/user/del", data)
    .subscribe()
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }


  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };    
    });
    
  }

  initLoading = true; // bug
  loadingMore = false;

  list: Array<{ loading: boolean; name: any }> = [];

 ngOnInit(){
    
        for (let i = 0; i < 3; i++){
           this.listOfData.push ({   
            id: `${i}`,
            username : 'username',
            password: `22 ${i}`,
            emailaddress: `London Park no. ${i}`,
            phone: `13411 ${i}`,          
          });  
        }
    }

  
}
     

  





 

