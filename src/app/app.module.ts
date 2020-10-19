import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {CountryListComponent} from './component/country-list/country-list.component';
import {CountComponent} from './component/count/count.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
    declarations: [
        AppComponent,
        CountryListComponent,
        CountComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TableModule,
        ButtonModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
