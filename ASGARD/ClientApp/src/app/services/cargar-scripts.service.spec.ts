import { TestBed, inject } from '@angular/core/testing';

import { CargarScriptsService } from './cargar-scripts.service';

describe('CargarScriptsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargarScriptsService]
    });
  });

  it('should be created', inject([CargarScriptsService], (service: CargarScriptsService) => {
    expect(service).toBeTruthy();
  }));
});
