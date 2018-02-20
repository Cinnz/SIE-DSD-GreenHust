import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  GoogleMaps, GoogleMap, GoogleMapsEvent
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-gh-home',
  templateUrl: 'gh-home.html',
})
export class GhHomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter GhHomePage');

    if(!this.map){
      this.loadMap();
    }

  }

  loadMap() {
    let element: HTMLElement = document.getElementById('map');
    
    // this.map = this.mGoogleMaps.create(this.mapElement.nativeElement);
    this.map = GoogleMaps.create(element);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!');
    });
  }

}
