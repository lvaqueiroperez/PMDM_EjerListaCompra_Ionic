import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {ProductosComponent} from "../components/productos/productos";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // AQUÍ ESTABLECEMOS LA PÁGINA QUE SE MOSTRARÁ INICIALMENTE EN LA APP CON SU NOMBRE
  rootPage:any = ProductosComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

