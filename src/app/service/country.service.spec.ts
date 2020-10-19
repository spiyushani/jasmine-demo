import {CountryService} from './country.service';
import {Country} from '../model/country';
import {asyncData, asyncError} from '../testing/async-test-helper';
import {HttpErrorResponse} from '@angular/common/http';
import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

let httpClientSpy: { get: jasmine.Spy };
let countryService: CountryService;

describe('CountryService', () => {
    const expectedCountries: Country[] = [
        {name: 'Finland', capital: 'Helsinki'},
        {name: 'United States', capital: 'Washington, D.C.'},
        {name: 'United Kingdom', capital: 'London'},
        {name: 'China', capital: 'Beijing'},
        {name: 'India', capital: 'New Delhi'}
    ];
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        const injector = getTestBed();
        const httpMock = injector.get(HttpClientTestingModule);
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        countryService = new CountryService(httpClientSpy as any);
        httpClientSpy.get.and.returnValue(asyncData(expectedCountries));
    });

    it('should return expected countries (HttpClient called once)', () => {
        countryService.getCountries().subscribe(
            countries => expect(countries).toEqual(expectedCountries, 'expected countries'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should return an error when server returns 404', () => {
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found'
        });
        httpClientSpy.get.and.returnValue(asyncError(errorResponse));
        countryService.getCountries().subscribe(
            () => fail('error expected'),
            error => {
                expect(error.message).toContain('404');
            }
        );
    });
});
