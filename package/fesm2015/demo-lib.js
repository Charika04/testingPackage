import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class DemoLibService {
    constructor() { }
}
DemoLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: DemoLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DemoLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: DemoLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: DemoLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DemoLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
DemoLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: DemoLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DemoLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: DemoLibComponent, selector: "lib-demoLib", ngImport: i0, template: `
    <p>
      demo-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: DemoLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-demoLib',
                    template: `
    <p>
      demo-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class DemoLibModule {
}
DemoLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: DemoLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DemoLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: DemoLibModule, declarations: [DemoLibComponent], exports: [DemoLibComponent] });
DemoLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: DemoLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: DemoLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DemoLibComponent
                    ],
                    imports: [],
                    exports: [
                        DemoLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of demo-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DemoLibComponent, DemoLibModule, DemoLibService };
//# sourceMappingURL=demo-lib.js.map
