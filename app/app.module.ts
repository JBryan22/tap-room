import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { FormsModule } from '@angular/forms';
import { NewKegComponent } from './new-keg.component';
import { KegDetailsComponent } from './keg-details.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  KegListComponent,
                  EditKegComponent,
                  NewKegComponent,
                  KegDetailsComponent
                 ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
