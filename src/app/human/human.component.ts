import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HumanComponent implements OnInit, OnChanges {
	@Input() power;

	constructor() { }


	ngOnInit() {
	}

	ngOnChanges(){
		this.power = this.power * 10;
	}
}
