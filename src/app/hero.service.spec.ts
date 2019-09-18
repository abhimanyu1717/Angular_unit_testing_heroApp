import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {

  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, FormsModule],
      providers: [HeroService]
    })

    service = TestBed.get(HeroService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });

  describe('#getHeros', () => {
    it('it should return an obserable <Hero[]>', () => {
      const dummyHero = [{ id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' }];

      service.getHeroes().subscribe((heroList) => {
        expect(heroList.length).toBe(3);
      });

      const req = httpMock.expectOne(`${service.heroesUrl}`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyHero);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });

});
