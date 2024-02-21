import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
const  routes: Routes = [
  // { path: '', redirectTo: '/home-page', pathMatch: 'full' }, // Đường dẫn mặc định
  { path: 'home-page', component: HomePageComponent },
  { path: 'register-page', component: RegisterPageComponent } ,
  {path:'login-page',component:LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes }; // Export the 'routes' variable

