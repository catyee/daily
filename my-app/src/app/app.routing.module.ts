import { Route, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { IndexComponent } from './index/component/index.component';


const routes: Route[] = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        // loadChildren: 'app/index/index.module.ts#IndexModule'
        component: IndexComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
