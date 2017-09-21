import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'new-keg',
  template: `

    <div *ngIf="addNewButtonInput">
      <div class="card">
      <div class="card-form pa3">
      <h1>New Keg</h1>
        <label>Enter Keg Name</label>
        <input #newName align="right">
        <br>
        <label>Enter Keg Brand</label>
        <input #newBrand align="right">
        <br>
        <label>Enter Price Per Pint</label>
        <input #newPrice align="right">
        <br>
        <label>Enter Alcohol Content</label>
        <input #newContent align="right">
        <br>
        <button class="btn btn-default" (click)="submitForm(newName.value, newBrand.value, newPrice.value, newContent.value);">Add New Keg</button>
        <button class="btn btn-default" (click)="cancelButton()">Cancel</button>
    </div>
    </div>
  </div>
  `
})

export class NewKegComponent {
  @Input() addNewButtonInput: Keg;
  @Output() newKegSender = new EventEmitter();

  submitForm(newName: string, newBrand: string, newPrice: number, newContent: number) {
    var newKegToAdd: Keg = new Keg(newName, newBrand, newPrice, newContent);
    this.newKegSender.emit(newKegToAdd);

  }

  cancelButton() {
    this.newKegSender.emit(null);
  }


  }
