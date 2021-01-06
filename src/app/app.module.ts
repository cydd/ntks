import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ENTERComponent } from './components/enter/enter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { REGISTERComponent } from './components/register/register.component';
import { LISTComponent } from './components/list/list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChattingComponent } from './components/chatting/chatting.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ChattingroomComponent } from './components/chattingroom/chattingroom.component';
import { ListNewComponent } from './components/list-new/list-new.component';
import { ListModifyComponent } from './components/list-modify/list-modify.component';




registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ENTERComponent,
    REGISTERComponent,
    LISTComponent,
    SidebarComponent,
    ChattingComponent,
    NavbarComponent,
    LayoutComponent,
    ChattingroomComponent,
    ListNewComponent,
    ListModifyComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
