import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../model/country';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    constructor(private http: HttpClient) {
    }

    getCountries(): Observable<Country[]> {
        return this.http.get<any>('assets/data/countries.json');
    }

}
