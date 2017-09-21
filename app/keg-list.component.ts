import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `

    <div class="card" *ngFor="let currentKeg of childKegList">
      <div class="card-block">
        <button class="edit-button"(click)="editButtonHasBeenClicked(currentKeg)"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></button>
        <button class="details-button" (click)="detailsButtonHasBeenClicked(currentKeg)"><i class="fa fa-signal fa-lg" aria-hidden="true"></i></button>
        <h4 class="card-title">{{currentKeg.name}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{currentKeg.brand}}</h6>
        <h5 class="card-text"><span class="badge badge-success">Price: \${{currentKeg.price}}</span> <span class="badge badge-default">ABV: {{currentKeg.abv}}%</span></h5>
      </div>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() detailsClickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  detailsButtonHasBeenClicked(kegToDetail: Keg) {
    this.detailsClickSender.emit(kegToDetail);
  }

}
