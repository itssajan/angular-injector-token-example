import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroData } from './hero-data';

const appConfig: ApplicationConfig = {
    providers: [
        // adding protractor support for tests in docs
        provideProtractorTestingSupport(),
        importProvidersFrom(InMemoryWebApiModule.forRoot(HeroData)),
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ]
};

export default appConfig;


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/