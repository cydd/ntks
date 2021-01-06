import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient,HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class ENTERComponent implements OnInit {  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,public http:HttpClient) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  onClickMe()
  {

    const data=new HttpParams()
    .set('username', this.validateForm.value.username)
    .set('password', this.validateForm.value.password)
  
    var Res:string="";
      this.http.post<any>("http://localhost:9001/user/ser", data)
        .subscribe((data: string) => {
        Res=data['Status']
        // if (Res == "Succeeded"){
        //   Res = data['token']
        //   localStorage.setItem('access_token',Res);
        //   this.router.navigateByUrl('/userMgr/dashboard');
        // }
    })
   }












}
