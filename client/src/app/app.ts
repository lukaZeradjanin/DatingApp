import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'The Dating app';
  users: any;
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.getUsers();
    }
  }

  getUsers() {
    this.http.get('http://localhost:5022/api/users').subscribe({
      next: res => this.users = res,
      error: err => console.error(err)
    });
  }
}
