import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MstorefrontSharedModule } from 'app/shared/shared.module';
import { MstorefrontCoreModule } from 'app/core/core.module';
import { MstorefrontAppRoutingModule } from './app-routing.module';
import { MstorefrontHomeModule } from './home/home.module';
import { MstorefrontEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MstorefrontSharedModule,
    MstorefrontCoreModule,
    MstorefrontHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MstorefrontEntityModule,
    MstorefrontAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class MstorefrontAppModule {}
