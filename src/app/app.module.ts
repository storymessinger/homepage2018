import { BackgroundService } from './services/background.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routerConfig } from './app.routing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { WorksComponent } from './works/works.component';
import { PrimroseComponent } from './worksDetail/primrose/primrose.component';
import { WorksDetailBaseComponent } from './worksDetail/works-detail-base/works-detail-base.component';
import { AboutComponent } from './about/about.component';
import { ConsumerComponent } from './worksDetail/consumer/consumer.component';
import { MusicalComponent } from './worksDetail/musical/musical.component';
import { HokComponent } from './worksDetail/hok/hok.component';
import { DustaticComponent } from './worksDetail/dustatic/dustatic.component';
import { CatshelterComponent } from './worksDetail/catshelter/catshelter.component';
import { BanbanComponent } from './worksDetail/banban/banban.component';
import { StartkaistComponent } from './worksDetail/startkaist/startkaist.component';
import { ChurrosComponent } from './worksDetail/churros/churros.component';
import { SoundcloudComponent } from './worksDetail/soundcloud/soundcloud.component';
import { DoradoraComponent } from './worksDetail/doradora/doradora.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    WorksComponent,
    PrimroseComponent,
    WorksDetailBaseComponent,
    AboutComponent,
    ConsumerComponent,
    MusicalComponent,
    HokComponent,
    DustaticComponent,
    CatshelterComponent,
    BanbanComponent,
    StartkaistComponent,
    ChurrosComponent,
    SoundcloudComponent,
    DoradoraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    BrowserAnimationsModule
  ],
  providers: [
    BackgroundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
