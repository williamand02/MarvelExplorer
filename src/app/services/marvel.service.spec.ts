import { TestBed } from '@angular/core/testing';

import { MarvelService } from './marvel.service';

describe('MarvelService', () => {
  let service: MarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return characters', () => {
    service.getCharacters().subscribe((result) => {
      expect(result).toBeDefined();
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
