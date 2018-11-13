import { Component } from "@angular/core";

@Component({
    selector: 'app-touch-event',
    template: `
    <ion-grid>
    <ion-row>
    <ion-col col-6 class="gestures" (tap)="onElementTapped()" text-center>Tap me</ion-col>
     <ion-col col-6 class="gestures" (press)="onElementPressed()" text-center>Long press me</ion-col>
     </ion-row>
    </ion-grid>`
})
export class TouchEventComponent{
    
      onElementTapped(){
        console.log("I was tapped");
      }
    
      onElementPressed(){
        console.log("I was pressed");
      }
    

    }