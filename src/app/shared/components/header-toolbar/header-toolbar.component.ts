import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  redirectToHome() {
    this.router.navigateByUrl('home');
  }

}
