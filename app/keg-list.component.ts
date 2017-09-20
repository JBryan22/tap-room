import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="row">
  <div class="col-md-5">
    <div class="card" *ngFor="let currentKeg of childKegList">
      <div class="card-block">
        <button (click)="editButtonHasBeenClicked(currentKeg)"><img src="./../resources/img/glyphicons-31-pencil.png"></button>
        <h4 class="card-title">{{currentKeg.name}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{currentKeg.brand}}</h6>
        <h5 class="card-text"><span class="badge badge-success">Price: \${{currentKeg.price}}</span> <span class="badge badge-default">ABV: {{currentKeg.abv}}</span></h5>
      </div>
    </div>
  </div>
  <div class="col-md-5 keg-level">
  <img src="./../resources/img/keg1.png">
  </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

}
