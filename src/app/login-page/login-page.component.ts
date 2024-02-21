import { Component } from '@angular/core';
import { studentArray } from '../../assets/db/Students';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  user={
    username:'',
    password:''
  }
  login(username: string, password: string): boolean {
    for (let student of studentArray) {
      if (student.username === username && student.password === password) {
        return true; // Tìm thấy tên người dùng và mật khẩu trong mảng
      }
    }
    return false; // Không tìm thấy tên người dùng và mật khẩu trong mảng
  }
  onLogin() {
    if (this.login(this.user.username, this.user.password)) {
      console.log("Đăng nhập thành công!");
      alert('Login success');
      // Thực hiện hành động sau khi đăng nhập thành công, chẳng hạn chuyển hướng đến trang khác
    } else {
      console.log("Đăng nhập thất bại! Tên người dùng hoặc mật khẩu không đúng.");
      alert('login false')
      // Hiển thị thông báo lỗi đăng nhập không thành công
    }
  }
}
