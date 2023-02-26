import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSimplemdeLibraryComponent } from './ng-simplemde-library.component';

describe('NgSimplemdeLibraryComponent', () => {
  let component: NgSimplemdeLibraryComponent;
  let fixture: ComponentFixture<NgSimplemdeLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSimplemdeLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSimplemdeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
