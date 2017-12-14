import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterSampleApplication1SharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleApplication1AppRoutingModule} from './app-routing.module';
import { JhipsterSampleApplication1HomeModule } from './home/home.module';
import { JhipsterSampleApplication1AdminModule } from './admin/admin.module';
import { JhipsterSampleApplication1AccountModule } from './account/account.module';
import { JhipsterSampleApplication1EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSampleApplication1AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleApplication1SharedModule,
        JhipsterSampleApplication1HomeModule,
        JhipsterSampleApplication1AdminModule,
        JhipsterSampleApplication1AccountModule,
        JhipsterSampleApplication1EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleApplication1AppModule {}
