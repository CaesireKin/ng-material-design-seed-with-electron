import {NgModule} from '@angular/core';

import {MatCardModule} from '@angular/material/card';

/*
  * Import some general material-design compoents here
  * Other components import where custom component require
  */
@NgModule({
    imports: [
        MatCardModule
    ],
    exports: [
        MatCardModule
    ]
})
export class MaterialDesignModule {

}