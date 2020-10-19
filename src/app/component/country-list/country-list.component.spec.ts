import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {CountryListComponent} from './country-list.component';
import {of} from 'rxjs';
import {CountryService} from '../../service/country.service';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {CountComponent} from '../count/count.component';

describe('CountryListComponent', () => {
    let component: CountryListComponent;
    let fixture: ComponentFixture<CountryListComponent>;
    const countryService = jasmine.createSpyObj('CountryService', ['getCountries']);
    const testCountryList = [
        {name: 'Finland', capital: 'Helsinki'},
        {name: 'United States', capital: 'Washington, D.C.'}
    ];
    const getCountriesSpy = countryService.getCountries.and.returnValue(of(testCountryList));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CountryListComponent, CountComponent],
            providers: [{provide: CountryService, useValue: countryService}],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CountryListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return country list after component initialized', fakeAsync(() => {
        expect(getCountriesSpy).toHaveBeenCalled();
        expect(getCountriesSpy.calls.all().length).toEqual(2);
        expect(component.countries).toBe(testCountryList);
    }));
});
