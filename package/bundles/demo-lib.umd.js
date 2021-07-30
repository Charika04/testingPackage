(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('demo-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['demo-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var DemoLibService = /** @class */ (function () {
        function DemoLibService() {
        }
        return DemoLibService;
    }());
    DemoLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: DemoLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DemoLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: DemoLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: DemoLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var DemoLibComponent = /** @class */ (function () {
        function DemoLibComponent() {
        }
        DemoLibComponent.prototype.ngOnInit = function () {
        };
        return DemoLibComponent;
    }());
    DemoLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: DemoLibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DemoLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: DemoLibComponent, selector: "lib-demoLib", ngImport: i0__namespace, template: "\n    <p>\n      demo-lib works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: DemoLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-demoLib',
                        template: "\n    <p>\n      demo-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var DemoLibModule = /** @class */ (function () {
        function DemoLibModule() {
        }
        return DemoLibModule;
    }());
    DemoLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: DemoLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DemoLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: DemoLibModule, declarations: [DemoLibComponent], exports: [DemoLibComponent] });
    DemoLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: DemoLibModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: DemoLibModule, decorators: [{
                type: i0.NgModule,
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

    exports.DemoLibComponent = DemoLibComponent;
    exports.DemoLibModule = DemoLibModule;
    exports.DemoLibService = DemoLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=demo-lib.umd.js.map
