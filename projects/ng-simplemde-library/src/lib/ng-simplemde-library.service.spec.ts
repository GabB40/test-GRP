import { TestBed } from '@angular/core/testing';

import { NgSimplemdeLibraryService } from './ng-simplemde-library.service';

describe('NgSimplemdeLibraryService', () => {
  let service: NgSimplemdeLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSimplemdeLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
