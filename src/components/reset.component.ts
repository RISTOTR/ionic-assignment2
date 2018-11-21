import { Component } from "@angular/core";

@Component({
    selector: 'app-reset',
    template: `
    <ion-row>
    <ion-col>
     <button 
     ion-button 
     color="danger" 
     small 
     block
     (click)="onReset('all')">Reset all</button>
    </ion-col>
    <ion-col>
     <button 
     ion-button 
     color="danger" 
     small 
     block
     (click)="onReset('tap')">Reset "taps"</button>
    </ion-col>
    <ion-col>
     <button 
     ion-button 
     color="danger" 
     small 
     block
     (click)="onReset('press')">Reset "presses"</button>
    </ion-col>
    </ion-row>

    `
})

export class ResetComponent {
  onReset(type: string) {
      
  }
}