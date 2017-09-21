import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>

    <div class="row">
    <div class="col-md-6">

    <div class="card pa2 grow f3-ns no-underline bg-dark-green white-90">
    <button class="tc"(click)="addNewButton()"><i class="fa fa-plus tc fa-lg "></i></button>
    </div>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (detailsClickSender)="detailsKeg($event)"></keg-list>
    </div>
    <div class="col-md-6 ba pt4 details">
    <keg-details [kegDetailsSelectedKeg]="selectedDetailsKeg"></keg-details>
    </div>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickSender)="finishedEditing()"></edit-keg>
    <new-keg [addNewButtonInput]="addNewButtonClicked" (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {

  selectedKeg = null;
  selectedDetailsKeg = null;
  addNewButtonClicked = null;

  masterKegList: Keg[] = [
    new Keg('Fremont Summer Ale', 'Fremont Brewing Company', 6, 5.2),
    new Keg('Moon Tower Stout', 'Hellbent Brewing Company', 5, 6.4),
    new Keg('Hop Session', 'Dru Bru', 6, 4.7),
    new Keg('Fremont Summer Ale', 'Fremont Brewing Company', 7, 8.2),
    new Keg('Dark Bru', 'Dru Bru', 5, 6.7)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    if(newKegFromChild) {
      this.masterKegList.push(newKegFromChild);
    }
    this.addNewButtonClicked = null;
  }

  addNewButton() {
    this.addNewButtonClicked = true;
  }

  detailsKeg(clickedKeg) {
    this.selectedDetailsKeg = clickedKeg;
  }

}
