import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Button',
      url: '/button',
      icon:'radio-button-on'
    },
    {
      title: 'image',
      url: '/image',
      icon:'image'
    },
    {
      title: 'spinner',
      url: '/spinner',
      icon:'reload-circle'
    },
    {
      title: 'floating active button',
      url: '/fab',
      icon:'radio-button-off'
    },
    {
      title: 'input',
      url: '/input',
      icon:'pencil'
    },
    {
      title: 'item',
      url: '/item',
      icon: 'list'
    },
    {
      title: 'toolbar',
      url: '/toolbar',
      icon:'build'
    },
    {
      title: 'checkbox',
      url: '/checkbox',
      icon: 'archive'
    },
    {
      title: 'Card',
      url: '/card',
      icon: 'card'
    },
    {
      title: 'select',
      url: '/select',
      icon: 'checkmark'
    }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
