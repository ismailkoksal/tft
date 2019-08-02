import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChampionPage } from './single-champion.page';

describe('SingleChampionPage', () => {
  let component: SingleChampionPage;
  let fixture: ComponentFixture<SingleChampionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleChampionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleChampionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
