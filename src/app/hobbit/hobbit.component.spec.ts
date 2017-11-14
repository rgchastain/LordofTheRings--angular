import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbitComponent } from './hobbit.component';

describe('HobbitComponent', () => {
  let component: HobbitComponent;
  let fixture: ComponentFixture<HobbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
