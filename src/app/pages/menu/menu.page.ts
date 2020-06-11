import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {title: 'Main', url: '/menu/main', icon: 'apps-outline'},
    {title: 'Home', url: '/menu/home', icon: 'home-outline'},
    {
      title: 'Menu', children: [
        {title: 'main', url: '/menu/main', icon: 'apps-outline'},
        {title: 'home', url: '/menu/home', icon: 'home-outline'}
      ]
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
