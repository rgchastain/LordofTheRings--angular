import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-hobbit',
  templateUrl: './hobbit.component.html',
  styleUrls: ['./hobbit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HobbitComponent implements OnInit {
@Input() power;

  constructor() { }

  ngOnInit() {
  }

}
