import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'new-keg',
  template: `
  <div *ngIf="addNewButtonInput">
    <h1>New Keg</h1>
      <label>Enter Keg Name</label>
      <input #newName>
      <label>Enter Keg Brand</label>
      <input #newBrand>
      <label>Enter Price Per Pint</label>
      <input #newPrice>
      <label>Enter Keg Alcohol Content</label>
      <input #newContent>
      <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newContent.value);">Add New Keg</button>
      <button (click)="cancelButton()">Cancel</button>
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
