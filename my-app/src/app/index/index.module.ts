import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./component/index.component";
import { DetailComponent } from "./component/detail.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        DetailComponent,
        IndexComponent,

    ],
    exports: [
        IndexComponent,
        // DetailComponent,

    ]
})
export class IndexModule {

}
