import { TestBed } from '@angular/core/testing';

import { AddTextAreaService } from './add-text-area.service';

describe('AddTextAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddTextAreaService = TestBed.get(AddTextAreaService);
    expect(service).toBeTruthy();
  });
});
