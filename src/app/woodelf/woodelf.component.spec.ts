import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodelfComponent } from './woodelf.component';

describe('WoodelfComponent', () => {
  let component: WoodelfComponent;
  let fixture: ComponentFixture<WoodelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
