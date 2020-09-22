import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @ViewChild('navbar') navbar: ElementRef;
  // @ViewChild('navheader') navheader: ElementRef;
  // @ViewChild('sideBarMenu') sideBarMenu: ElementRef;
  // @ViewChild('sidebarLogin') sidebarLogin: ElementRef;
  // @ViewChild('services') services: ElementRef;
  // @ViewChild('usecases') usecases: ElementRef;
  // @ViewChild('aboutus') aboutus: ElementRef;
  // @ViewChild('contactus') contactus: ElementRef;

  constructor() { }

  ngOnInit() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header").removeClass("active");
      }
  });

   }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   if (window.pageYOffset > 100) {
  //     this.navbar.nativeElement.classList.add('sticky-top');
  //     this.navheader.nativeElement.classList.add('bg-white');
  //     // this.services.nativeElement.classList.remove('text-white');
  //     // this.usecases.nativeElement.classList.remove('text-white');
  //     // this.aboutus.nativeElement.classList.remove('text-white');
  //     // this.contactus.nativeElement.classList.remove('text-white');
  //   } else {
  //     this.navbar.nativeElement.classList.remove('sticky-top');
  //     this.navheader.nativeElement.classList.remove('bg-white');
  //     // this.services.nativeElement.classList.add('text-white');
  //     // this.usecases.nativeElement.classList.add('text-white');
  //     // this.aboutus.nativeElement.classList.add('text-white');
  //     // this.contactus.nativeElement.classList.add('text-white');

      
  //   }
  // }


  // openNav() {
  //   console.log("rah");
    
  //   console.log(window.innerWidth);
    
  //   if (window.innerWidth > 700) {
  //     this.sideBarMenu.nativeElement.style.width = '40%';
  //     this.sideBarMenu.nativeElement.style.left = '60%';
  //   } else {
  //     this.sideBarMenu.nativeElement.style.width = '100%';
  //   }

  // }
  // closeNav() {
  //   this.sideBarMenu.nativeElement.style.width = '0%';
  //   this.sidebarLogin.nativeElement.style.width = '0%';
  //   this.sideBarMenu.nativeElement.style.left = '0';
  //   this.sidebarLogin.nativeElement.style.left = '0';
  // }
  // openNav_login() {
  //   if (window.innerWidth > 480) {
  //     this.sidebarLogin.nativeElement.style.width = '40%';
  //     this.sidebarLogin.nativeElement.style.left = '60%';
  //   } else {
  //     this.sidebarLogin.nativeElement.style.width = '100%';
  //   }
  // }


}
