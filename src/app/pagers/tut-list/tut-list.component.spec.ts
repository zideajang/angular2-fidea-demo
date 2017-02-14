/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TutListComponent } from './tut-list.component';

describe('TutListComponent', () => {
  let component: TutListComponent;
  let fixture: ComponentFixture<TutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
