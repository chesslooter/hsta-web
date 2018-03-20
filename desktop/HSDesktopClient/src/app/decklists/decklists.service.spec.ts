import { TestBed, inject } from '@angular/core/testing';

import { DecklistsService } from './decklists.service';

describe('DecklistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecklistsService]
    });
  });

  it('should be created', inject([DecklistsService], (service: DecklistsService) => {
    expect(service).toBeTruthy();
  }));
});
