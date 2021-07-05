import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanpagePage } from './scanpage.page';

describe('ScanpagePage', () => {
  let component: ScanpagePage;
  let fixture: ComponentFixture<ScanpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
