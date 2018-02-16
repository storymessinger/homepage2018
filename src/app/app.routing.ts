import { DoradoraComponent } from './worksDetail/doradora/doradora.component';
import { ChurrosComponent } from './worksDetail/churros/churros.component';
import { StartkaistComponent } from './worksDetail/startkaist/startkaist.component';
import { BanbanComponent } from './worksDetail/banban/banban.component';
import { CatshelterComponent } from './worksDetail/catshelter/catshelter.component';
import { DustaticComponent } from './worksDetail/dustatic/dustatic.component';
import { HokComponent } from './worksDetail/hok/hok.component';
import { MusicalComponent } from './worksDetail/musical/musical.component';
import { ConsumerComponent } from './worksDetail/consumer/consumer.component';
import { AboutComponent } from './about/about.component';
import { WorksDetailBaseComponent } from './worksDetail/works-detail-base/works-detail-base.component';
import { PrimroseComponent } from './worksDetail/primrose/primrose.component';
import { WorksComponent } from './works/works.component';
import { IntroComponent } from './intro/intro.component';
import { Routes, RouterModule } from "@angular/router";
import { SoundcloudComponent } from './worksDetail/soundcloud/soundcloud.component';

export const routerConfig: Routes = [
    { 
        path: '', 
        redirectTo: '',
        pathMatch: 'full'
    },
    { 
        path: '', 
        component: IntroComponent
    },
    {
        path: 'works',
        component: WorksComponent
    },
    {
        path: 'about',
        component: AboutComponent, 
    },
    {
        path: 'detail',
        component : WorksDetailBaseComponent,
        children: [
           {
               path: '1',
               component: PrimroseComponent
           }, 
           {
               path: '2',
               component: HokComponent 
           }, 
           {
               path: '3',
               component: DustaticComponent 
           }, 
           {
               path: '4',
               component: CatshelterComponent
           }, 
           {
               path: '5',
               component: BanbanComponent 
           }, 
           {
               path: '6',
               component: ConsumerComponent 
           }, 
           {
               path: '7',
               component: MusicalComponent 
           }, 
           {
               path: '8',
               component: StartkaistComponent 
           }, 
           {
               path: '10',
               component: ChurrosComponent 
           }, 
           {
               path: '11',
               component: SoundcloudComponent 
           }, 
           {
               path: '12',
               component: DoradoraComponent 
           }, 
            
        ]
    }
]