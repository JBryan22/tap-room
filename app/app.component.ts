import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickSender)="finishedEditing"></edit-keg>
    <!--<new-keg></new-keg>-->
  </div>
  `
})

export class AppComponent {

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Fremont Summer Ale', 'Fremont Brewing Company', 6, 5.2),
    new Keg('Moon Tower Stout ', 'Hellbent Brewing Company', 5, 6.4),
    new Keg('Hop Session', 'Dru Bru', 6, 4.7)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

}
