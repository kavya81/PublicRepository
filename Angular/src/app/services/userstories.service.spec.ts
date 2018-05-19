import { TestBed, inject } from '@angular/core/testing';

import { UserstoriesService } from './userstories.service';

describe('UserstoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserstoriesService]
    });
  });

  it('should be created', inject([UserstoriesService], (service: UserstoriesService) => {
    expect(service).toBeTruthy();
  }));
});
