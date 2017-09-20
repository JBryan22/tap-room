import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <h3>Edit {{childSelectedKeg.name}}</h3>
      <label>Enter Keg Name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
      
      <label>Enter Keg Brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand">

      <label>Enter Keg Price Per Pint:</label>
      <input [(ngModel)]="childSelectedKeg.price">

      <label>Enter Keg Alcohol Content:</label>
      <input [(ngModel)]="childSelectedKeg.abv">

      <p>Number of pints left: {{childSelectedKeg.numberOfPints}}</p>
      <button (click)="doneButtonClicked()">Done</button>
      <div *ngIf="childSelectedKeg.numberOfPints < 1">
        <button (click)="replaceKegClicked()">Replace Kicked Keg</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickSender.emit();
  }

  replaceKegClicked() {
    this.childSelectedKeg.numberOfPints = 124;
  }
}
