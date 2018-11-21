import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  tapped = 0;
  pressed = 0;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){

  }

}
