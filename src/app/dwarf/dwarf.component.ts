import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dwarf',
  templateUrl: './dwarf.component.html',
  styleUrls: ['./dwarf.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DwarfComponent implements OnInit, OnChanges {
@Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.power = this.power * 5;
  }

}
