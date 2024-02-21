import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { Router } from '@angular/router';
import { platformBrowser } from '@angular/platform-browser';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  constructor(private router: Router) { }

  onSelect(event: any) {
    console.log(event.target.value);
    const selectedPage = event.target.value;
    this.router.navigate([selectedPage]);
  }
}
