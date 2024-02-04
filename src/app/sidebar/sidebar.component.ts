import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveClassBasedOnRoute();
      }
    });
  }

  setActiveClassBasedOnRoute() {
    const activeRoute = this.router.url;
    const links = document.querySelectorAll('.nav_link');

    links.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('routerLink') || link.getAttribute('href');
      if (activeRoute === href) {
        link.classList.add('active');
      }
    });
  }
}
