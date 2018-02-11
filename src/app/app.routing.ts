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
        path: 'detail',
        component : WorksDetailBaseComponent,
        children: [
           {
               path: '1',
               component: PrimroseComponent
           } 
            
        ]
    }
]