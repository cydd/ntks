import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ENTERComponent } from './components/enter/enter.component';
import { REGISTERComponent } from './components/register/register.component';
import { LISTComponent } from './components/list/list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListNewComponent } from './components/list-new/list-new.component';
import { ListModifyComponent } from './components/list-modify/list-modify.component';





const routes: Routes = [
  { 
    path: 'layout',
   component: LayoutComponent 
  },
  { path: 'enter', component: ENTERComponent },
  { path: 'register', component: REGISTERComponent },
  { 
    path: 'list', 
    component: LayoutComponent,
    children:[
       {
        path:'new',
        component:ListNewComponent
      },
      {
        path:'edit',
        component:ListModifyComponent
      },
      {
        path:'',
        component:LISTComponent
      }
     

    ] 
  },
  { path: 'sidebar', component: SidebarComponent },
  { path: '**', redirectTo: 'enter' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
