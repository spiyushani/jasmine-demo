import {Component, OnInit} from '@angular/core';
import {Country} from '../../model/country';
import {CountryService} from '../../service/country.service';

@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
    countries: Country[];
    cols: any[];

    constructor(private countryService: CountryService) {
    }

    ngOnInit() {
        this.countryService.getCountries().subscribe(response => this.countries = response);

        this.cols = [
            {field: 'name', header: 'Name'},
            {field: 'capital', header: 'Capital'}
        ];
    }

    reload($event: boolean) {
        if ($event) {
            this.countryService.getCountries().subscribe(response => this.countries = response);
        }
    }
}
