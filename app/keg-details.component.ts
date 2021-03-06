import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

// Math.floor(this.kegDetailsSelectedKeg.numberOfPints / 12.4)

@Component({
  selector: 'keg-details',
  template: `
  <div class="pt4 fixed card" *ngIf="kegDetailsSelectedKeg">
    <div class="card-block">
    <div class="row">
      <div class="keg-level">
        <button class="ma2 fr back-button" (click)="backButton()"><i class="fa fa-times" aria-hidden="true"></i>
</button>
        <h4 class="tc">{{kegDetailsSelectedKeg.name}}</h4>
        <h5 class="tc"> Remaining Pints: {{kegDetailsSelectedKeg.numberOfPints}}</h5>
        <img src={{kegDetailsSelectedKeg.imageUrl}}>
      </div>
    </div>

    <div class="row">
    <div class="col-md-6 tc">
      <div *ngIf="kegDetailsSelectedKeg.numberOfPints > 0">
        <button class="btn btn-default ma2"(click)="sellPint()">Sell Pint</button>
      </div>
      <div *ngIf="kegDetailsSelectedKeg.numberOfPints > 4">
        <button class="btn btn-default ma2" (click)="sellGrowler()">Sell Growler</button>
        </div>
      </div>
      <div class="col-md-6 tc">
      <button class="btn btn-default ma2" (click)="sellKeg()">Sell Keg</button>
      <button class="btn btn-default ma2" (click)="replaceKeg()">Order Replacement</button>
      </div>
  </div>
  </div>
  </div>
  `
})

export class KegDetailsComponent {

  @Input() kegDetailsSelectedKeg: Keg;
  @Output() moneyKegSender = new EventEmitter();
  @Output() backKegSender = new EventEmitter();

  imageNumber: number;

  sellPint() {
    this.kegDetailsSelectedKeg.numberOfPints -= 1;
    this.kegDetailsSelectedKeg.changeImage();
  }

  sellGrowler() {
    this.kegDetailsSelectedKeg.numberOfPints -= 4;
    this.kegDetailsSelectedKeg.changeImage();
  }

  sellKeg() {
    //money output
  }

  replaceKeg() {
    this.kegDetailsSelectedKeg.numberOfPints = 124;
    this.kegDetailsSelectedKeg.changeImage();
  }

  backButton() {
    this.kegDetailsSelectedKeg = null;
  }


}
