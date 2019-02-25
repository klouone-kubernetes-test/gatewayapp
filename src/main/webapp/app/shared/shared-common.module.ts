import { NgModule } from '@angular/core';

import { GatewayappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GatewayappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GatewayappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GatewayappSharedCommonModule {}
