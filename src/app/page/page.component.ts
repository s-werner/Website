import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  page = {
    title: 'Hello!',
    subtitle: 'Sean Werner',
    content: 'My name is Sean Werner and I am a computer science student at Penn State!',
    image: 'assets/image2.jpg'
  };
  /*
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  */
  constructor() { }

  ngOnInit(): void {
  }

}
