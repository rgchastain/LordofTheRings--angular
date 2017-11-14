import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { WoodelfComponent } from './woodelf/woodelf.component';
import { DwarfComponent } from './dwarf/dwarf.component';
import { HobbitComponent } from './hobbit/hobbit.component';
import { OrcComponent } from './orc/orc.component';
import { WizardComponent } from './wizard/wizard.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    WoodelfComponent,
    DwarfComponent,
    HobbitComponent,
    OrcComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
