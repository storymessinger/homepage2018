import { HokComponent } from './worksDetail/hok/hok.component';
import { MusicalComponent } from './worksDetail/musical/musical.component';
import { ConsumerComponent } from './worksDetail/consumer/consumer.component';
import { AboutComponent } from './about/about.component';
import { WorksDetailBaseComponent } from './worksDetail/works-detail-base/works-detail-base.component';
import { PrimroseComponent } from './worksDetail/primrose/primrose.component';
import { WorksComponent } from './works/works.component';
import { IntroComponent } from './intro/intro.component';
import { Routes, RouterModule } from "@angular/router";

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
               path: '6',
               component: ConsumerComponent 
           }, 
           {
               path: '7',
               component: MusicalComponent 
           }, 
            
        ]
    }
]