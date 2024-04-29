import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SpeakersApiService } from './speakers-api.service';
import { MOCK_PAGINATED_SPEAKERS } from '../mocks';

const setup = () => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SpeakersApiService],
  });

  const service = TestBed.inject(SpeakersApiService);
  const httpTestingController = TestBed.inject(HttpTestingController);

  return {
    service,
    httpTestingController,
  };
};

describe('SpeakersApiService', () => {
  describe('getPaginated', () => {
    it('returns data on success', (done) => {
      const { service, httpTestingController } = setup();

      service.getPaginated().subscribe((data) => {
        expect(data).toEqual(MOCK_PAGINATED_SPEAKERS);
        done();
      });

      const req = httpTestingController.expectOne(
        `https://randomuser.me/api/1.4/?page=0&results=20&seed=srt&inc=gender,name,dob,location,phone,email`
      );

      expect(req.request.method).toEqual('GET');

      req.flush(MOCK_PAGINATED_SPEAKERS);

      httpTestingController.verify();
    });
  });
});
