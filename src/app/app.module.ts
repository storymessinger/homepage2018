import { BackgroundService } from './services/background.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routerConfig } from './app.routing';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { WorksComponent } from './works/works.component';
import { PrimroseComponent } from './worksDetail/primrose/primrose.component';
import { WorksDetailBaseComponent } from './worksDetail/works-detail-base/works-detail-base.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    WorksComponent,
    PrimroseComponent,
    WorksDetailBaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [
    BackgroundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
