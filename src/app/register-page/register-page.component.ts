import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { CommonModule } from '@angular/common';
import { studentArray } from '../../assets/db/Students';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import this line


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
@Injectable({
  providedIn:'root'
})
export class RegisterPageComponent {
  constructor(private http: HttpClient) { }

  formData={
    username:'',
    password:'',
    fullname:'',
    email:'',
    gender:'',
    birthday:'',
    schoolfee:'',
    marks:''
  }
  saveData(){
    const toSave={
      username:this.formData.username,
    password:this.formData.password,
    fullname:this.formData.fullname,
    email:this.formData.email,
    gender:this.formData.gender,
    birthday:this.formData.birthday,
    schoolfee:this.formData.schoolfee,
    marks:this.formData.marks
    };
    studentArray.push(toSave);  
    const fileContent = ` ${JSON.stringify(studentArray)};`;

    const blob = new Blob([fileContent], { type: 'text/javascript' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Students.ts');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } 
}
