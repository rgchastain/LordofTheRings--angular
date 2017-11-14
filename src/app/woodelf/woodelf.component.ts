import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-woodelf',
  templateUrl: './woodelf.component.html',
  styleUrls: ['./woodelf.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WoodelfComponent implements OnInit, OnChanges {

@Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.power = this.power * 15;
  }

}
