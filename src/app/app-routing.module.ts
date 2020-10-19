import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryListComponent} from './component/country-list/country-list.component';


const routes: Routes = [
    {path: 'countries', component: CountryListComponent},
    {path: '**', redirectTo: '/countries'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
