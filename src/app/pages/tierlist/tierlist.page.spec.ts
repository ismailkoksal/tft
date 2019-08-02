import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierlistPage } from './tierlist.page';

describe('TierlistPage', () => {
  let component: TierlistPage;
  let fixture: ComponentFixture<TierlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
