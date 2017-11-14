import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-orc',
  templateUrl: './orc.component.html',
  styleUrls: ['./orc.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrcComponent implements OnInit, OnChanges {
@Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.power = this.power * 20;
  }

}
