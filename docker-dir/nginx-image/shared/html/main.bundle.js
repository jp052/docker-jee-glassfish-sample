webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(191),
        styles: [__webpack_require__(179)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navigation_navigation_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_not_found_not_found_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_admin_admin_module__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_detail_view_detail_view_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_login_login_module__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_problem_overview_problem_overview_module__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_can_deactivate_guard__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_problems_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__selective_preloading_strategy__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_breadcrumb_directive__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_8__modules_admin_admin_module__["AdminModule"],
            __WEBPACK_IMPORTED_MODULE_9__modules_detail_view_detail_view_module__["a" /* DetailViewModule */],
            __WEBPACK_IMPORTED_MODULE_10__modules_login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_11__modules_problem_overview_problem_overview_module__["a" /* ProblemOverviewModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_15__directives_breadcrumb_directive__["a" /* BreadcrumbDirective */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__guards_can_deactivate_guard__["a" /* CanDeactivateGuard */],
            __WEBPACK_IMPORTED_MODULE_13__services_problems_service__["a" /* ProblemsService */],
            __WEBPACK_IMPORTED_MODULE_14__selective_preloading_strategy__["a" /* SelectivePreloadingStrategy */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_detail_view_detail_view_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_not_found_not_found_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selective_preloading_strategy__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var appRoutes = [
    {
        path: '',
        redirectTo: 'OverviewComponent',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_detail_view_detail_view_component__["a" /* DetailViewComponent */],
    },
    {
        path: 'admin',
        loadChildren: 'app/modules/admin/admin.module#AdminModule',
        canLoad: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */]
    },
    { path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__components_not_found_not_found_component__["a" /* NotFoundComponent */]
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_5__selective_preloading_strategy__["a" /* SelectivePreloadingStrategy */] });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROBLEMS; });
var PROBLEMS = [
    {
        'id': '1',
        'titel': 'Fuge undicht',
        'module': 'ABC',
        'dates': '2017-04-19',
        'status': '70%',
        'kpi': 'Fuge',
        'actions': ['edit', 'delete'],
        'comments': ['Bitte überprüfen', 'Testen'],
        'involvedPersons': ['Max Mustermann', 'Max Maier'],
        'description': 'Fuge ist nicht dicht.',
        'tags': ['wichtig', 'Noch diese Woche']
    },
    {
        'id': '2',
        'titel': 'Sporadisch hartes Bremspedal',
        'module': 'ABC',
        'dates': '2017-04-22',
        'status': '30%',
        'kpi': 'Bremspedal',
        'actions': ['edit', 'delete'],
        'comments': ['Bitte überprüfen'],
        'involvedPersons': ['Heinz Müller'],
        'description': 'Beim Bremsen fühlt es sich an, als ob ich keinen Bremsverstärker mehr hätte.',
        'tags': ['Klärungsbedarf']
    },
    {
        'id': '3',
        'titel': 'Schiebedach gesprungen',
        'module': 'CDE',
        'dates': '2017-04-25',
        'status': '10%',
        'kpi': 'Schiebedach',
        'actions': ['edit', 'delete'],
        'comments': ['Bitte überprüfen'],
        'involvedPersons': ['Max Maierr'],
        'description': 'Während der Fahrt ist das Schiebedach gesprungen.',
        'tags': ['Klärungsbedarf']
    },
    {
        'id': '4',
        'titel': 'Fahrgestellnummer in Motorraum',
        'module': 'CDE',
        'dates': '2017-04-25',
        'status': '10%',
        'kpi': '',
        'actions': ['edit', 'delete'],
        'comments': ['Bitte überprüfen'],
        'involvedPersons': ['Max Maierr'],
        'description': 'Fahrgestellnummer angelaufen.',
        'tags': ['Klärungsbedarf']
    },
    {
        'id': '5',
        'titel': 'Fuge undicht',
        'module': 'FEG',
        'dates': '2017-04-19',
        'status': '70%',
        'kpi': 'Fuge',
        'actions': ['edit', 'delete'],
        'comments': ['Bitte überprüfen', 'Testen'],
        'involvedPersons': ['Max Mustermann', 'Max Maier'],
        'description': 'Fuge ist nicht dicht.',
        'tags': ['wichtig', 'Noch diese Woche']
    },
    {
        'id': '6',
        'titel': 'Sporadisch hartes Bremspedal',
        'module': 'FEG',
        'dates': '2017-04-22',
        'status': '30%',
        'kpi': 'Bremspedal',
        'actions': ['edit', 'delete'],
        'comments': ['Bitte überprüfen'],
        'involvedPersons': ['Heinz Müller'],
        'description': 'Beim Bremsen fühlt es sich an, als ob ich keinen Bremsverstärker mehr hätte.',
        'tags': ['Klärungsbedarf']
    },
    {
        'id': '7',
        'titel': 'Schiebedach gesprungen',
        'module': 'IB03',
        'dates': '2017-04-25',
        'status': '10%',
        'kpi': 'Schiebedach',
        'actions': ['edit', 'delete'],
        'comments': ['Bitte überprüfen'],
        'involvedPersons': ['Max Maierr'],
        'description': 'Während der Fahrt ist das Schiebedach gesprungen.',
        'tags': ['Klärungsbedarf']
    },
    {
        'id': '8',
        'titel': 'Fahrgestellnummer in Motorraum',
        'module': 'IB03',
        'dates': '2017-04-25',
        'status': '10%',
        'kpi': '',
        'actions': ['edit', 'delete'],
        'comments': ['Bitte überprüfen'],
        'involvedPersons': ['Max Maierr'],
        'description': 'Fahrgestellnummer angelaufen.',
        'tags': ['Klärungsbedarf']
    },
];
//# sourceMappingURL=data-problems.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
        this.isMobileMenu = false;
    }
    NavigationComponent.prototype.showMobileMenu = function () {
        this.isMobileMenu = this.isMobileMenu ? false : true;
    };
    NavigationComponent.prototype.hideMobileMenu = function () {
        this.isMobileMenu = false;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__(196),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_problems_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreviewComponent = (function () {
    function PreviewComponent(router, ProblemsService) {
        this.router = router;
        this.ProblemsService = ProblemsService;
    }
    PreviewComponent.prototype.addComment = function (id, comment) {
        this.ProblemsService.addComment(id, comment);
    };
    PreviewComponent.prototype.goToDetailPage = function (problem) {
        this.router.navigate(['detail', problem.id]);
    };
    return PreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Object)
], PreviewComponent.prototype, "previewProblem", void 0);
PreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-preview',
        template: __webpack_require__(199),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_problems_service__["a" /* ProblemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_problems_service__["a" /* ProblemsService */]) === "function" && _b || Object])
], PreviewComponent);

var _a, _b;
//# sourceMappingURL=preview.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableOverviewComponent = (function () {
    function TableOverviewComponent(router) {
        this.router = router;
        this.source = [];
        this.sortType = 'titel';
        this.reverse = true;
        this.isPreview = false;
    }
    TableOverviewComponent.prototype.setSortType = function (newSortType) {
        this.reverse = (this.sortType === newSortType) ? !this.reverse : false;
        this.sortType = newSortType;
    };
    TableOverviewComponent.prototype.goToDetailPage = function (problem) {
        this.router.navigate(['detail', problem.id]);
    };
    TableOverviewComponent.prototype.showPreview = function (problem) {
        this.isPreview = this.isPreview ? false : true;
        this.previewProblem = problem;
    };
    return TableOverviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Array)
], TableOverviewComponent.prototype, "source", void 0);
TableOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-table-overview',
        template: __webpack_require__(200),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], TableOverviewComponent);

var _a;
//# sourceMappingURL=table-overview.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbDirective = (function () {
    function BreadcrumbDirective() {
    }
    return BreadcrumbDirective;
}());
BreadcrumbDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '[appBreadcrumb]'
    }),
    __metadata("design:paramtypes", [])
], BreadcrumbDirective);

//# sourceMappingURL=breadcrumb.directive.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightBackgroundDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightBackgroundDirective = (function () {
    function HighlightBackgroundDirective(el) {
        this.el = el;
    }
    HighlightBackgroundDirective.prototype.onMouseEnter = function () {
        this.highlight(this.highlightColor || 'red');
    };
    HighlightBackgroundDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightBackgroundDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    return HighlightBackgroundDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", String)
], HighlightBackgroundDirective.prototype, "highlightColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightBackgroundDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightBackgroundDirective.prototype, "onMouseLeave", null);
HighlightBackgroundDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '[appHighlightBackground]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object])
], HighlightBackgroundDirective);

var _a;
//# sourceMappingURL=highlight-background.directive.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = OrderByPipe_1 = (function () {
    function OrderByPipe() {
    }
    OrderByPipe._orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        }
        else {
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0;
    };
    OrderByPipe.prototype.transform = function (input, _a) {
        var _b = _a[0], config = _b === void 0 ? '+' : _b;
        if (!Array.isArray(input)) {
            return input;
        }
        if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) === '-';
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc_1 ? input.sort() : input.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return input.sort(function (a, b) {
                    var comparison;
                    if (!desc_1) {
                        comparison = OrderByPipe_1._orderByComparator(a[property_1], b[property_1]);
                    }
                    else {
                        comparison = -OrderByPipe_1._orderByComparator(a[property_1], b[property_1]);
                    }
                    return comparison;
                });
            }
        }
    };
    return OrderByPipe;
}());
OrderByPipe = OrderByPipe_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
        name: 'orderBy'
    })
], OrderByPipe);

var OrderByPipe_1;
//# sourceMappingURL=order-by.pipe.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, filter) {
        if (filter && Array.isArray(value)) {
            var filterKeys_1 = Object.keys(filter);
            return value.filter(function (item) {
                return filterKeys_1.reduce(function (memo, keyName) {
                    return (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '';
                }, true);
            });
        }
        else {
            return value;
        }
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
        name: 'search'
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_admin_master_data_admin_master_data_component__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var adminRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: 'masterData',
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
                component: __WEBPACK_IMPORTED_MODULE_4__components_admin_admin_master_data_admin_master_data_component__["a" /* AdminMasterDataComponent */]
            },
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(adminRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_detail_view_detail_view_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_can_deactivate_guard__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_problems_resolver_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailViewRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var detailViewRoutes = [
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_detail_view_detail_view_component__["a" /* DetailViewComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__guards_can_deactivate_guard__["a" /* CanDeactivateGuard */]],
        resolve: {
            problem: __WEBPACK_IMPORTED_MODULE_4__services_problems_resolver_service__["a" /* ProblemsResolverService */]
        }
    }
];
var DetailViewRoutingModule = (function () {
    function DetailViewRoutingModule() {
    }
    return DetailViewRoutingModule;
}());
DetailViewRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(detailViewRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_problems_resolver_service__["a" /* ProblemsResolverService */]
        ]
    })
], DetailViewRoutingModule);

//# sourceMappingURL=detail-view-routing.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_detail_view_detail_view_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_highlight_background_directive__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_view_routing_module__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DetailViewModule = (function () {
    function DetailViewModule() {
    }
    return DetailViewModule;
}());
DetailViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__detail_view_routing_module__["a" /* DetailViewRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_detail_view_detail_view_component__["a" /* DetailViewComponent */],
            __WEBPACK_IMPORTED_MODULE_3__directives_highlight_background_directive__["a" /* HighlightBackgroundDirective */]
        ]
    })
], DetailViewModule);

//# sourceMappingURL=detail-view.module.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var loginRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(loginRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */],
        ]
    })
], LoginRoutingModule);

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_overview_overview_component__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemOverviewRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var problemOverviewRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_overview_overview_component__["a" /* OverviewComponent */]
    }
];
var ProblemOverviewRoutingModule = (function () {
    function ProblemOverviewRoutingModule() {
    }
    return ProblemOverviewRoutingModule;
}());
ProblemOverviewRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(problemOverviewRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], ProblemOverviewRoutingModule);

//# sourceMappingURL=problem-overview-routing.module.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_overview_overview_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_table_overview_table_overview_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_preview_preview_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filters_order_by_pipe__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filters_search_pipe__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__problem_overview_routing_module__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemOverviewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProblemOverviewModule = (function () {
    function ProblemOverviewModule() {
    }
    return ProblemOverviewModule;
}());
ProblemOverviewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__problem_overview_routing_module__["a" /* ProblemOverviewRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_overview_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_table_overview_table_overview_component__["a" /* TableOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_preview_preview_component__["a" /* PreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__filters_order_by_pipe__["a" /* OrderByPipe */],
            __WEBPACK_IMPORTED_MODULE_6__filters_search_pipe__["a" /* SearchPipe */]
        ]
    })
], ProblemOverviewModule);

//# sourceMappingURL=problem-overview.module.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problems_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemsResolverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProblemsResolverService = (function () {
    function ProblemsResolverService(ProblemsService, router) {
        this.ProblemsService = ProblemsService;
        this.router = router;
    }
    ProblemsResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return this.ProblemsService.findProblemById(id).then(function (problems) {
            if (problems) {
                return problems;
            }
            else {
                _this.router.navigate(['/login']);
                return null;
            }
        });
    };
    return ProblemsResolverService;
}());
ProblemsResolverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__problems_service__["a" /* ProblemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__problems_service__["a" /* ProblemsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], ProblemsResolverService);

var _a, _b;
//# sourceMappingURL=problems-resolver.service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".detail-view--tags {\n  border: 1px solid black;\n  border-radius: 4px;\n  padding: 0.5rem;\n  margin-right: 0.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".nav--active {\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".problem-overview--data {\n  padding-top: 2rem;\n  padding-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".problem-preview--button-group {\n  padding-top: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .problem-preview--button-group .btn {\n    white-space: normal; }\n\n.problem-preview--comment {\n  width: 50%;\n  float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".sortorder:after {\n  content: '\\25B2'; }\n\n.sortorder.reverse:after {\n  content: '\\25BC'; }\n\n.problem-preview {\n  border: 1px solid black;\n  padding: 2rem; }\n\n.search-form {\n  padding-top: 5rem;\n  padding-bottom: 3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_data_problems__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProblemsService = (function () {
    function ProblemsService() {
    }
    ProblemsService.prototype.getProblems = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__classes_data_problems__["a" /* PROBLEMS */]);
    };
    ProblemsService.prototype.findProblemById = function (id) {
        return this.getProblems().then(function (problems) {
            for (var i = 0; i < problems.length; i++) {
                if (problems[i].id === id) {
                    return problems[i];
                }
            }
        });
    };
    ProblemsService.prototype.addComment = function (id, comment) {
        this.getProblems().then(function (problems) {
            for (var i = 0; i < problems.length; i++) {
                if (problems[i].id === id) {
                    problems[i].comments.push(comment);
                }
            }
        });
    };
    return ProblemsService;
}());
ProblemsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProblemsService);

//# sourceMappingURL=problems.service.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-navigation></app-navigation>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"page-header col-md-12\">\n        <h2>Stammdatenpflege</h2>\n    </div>\n</div>"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header col-md-12\">\n    <h1>Admin</h1>\n    <p *ngIf=\"sessionId\">Session ID: {{ sessionId }}</p>\n</div>\n\n<div class=\"col-md-12\">\n    <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\">\n            <a routerLink=\"masterData\" [routerLinkActive]=\"['nav--active']\">\n            Stammdaten\n        </a>\n        </li>\n    </ul>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"page-header col-md-12\">\n        <h1>Problem Details</h1>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Problem suchen\">\n                    <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></span>\n                </div>\n            </div>\n            <div class=\"row problem-preview--button-groupcol-md-6\">\n                <button type=\"button\" class=\"btn btn-default\">\n                    <span class=\"glyphicon glyphicon-film\"></span>\n                    Präsentieren\n                </button>\n                <button type=\"button\" class=\"btn btn-default\">\n                    <span class=\"glyphicon glyphicon-user\"></span>\n                    Einsteuern\n                </button>\n                <button type=\"button\" class=\"btn btn-default\">\n                    <span class=\"glyphicon glyphicon-send\"></span>\n                    Weiterleiten\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n\n        <div class=\"page-header\">\n            <h2>{{ titel }}</h2>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <img src=\"http://placehold.it/300x75/D2DAE3\" title=\"Placeholder\" width=\"100%\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">Termine </div>\n                    <div class=\"panel-body\">\n                        {{ dates }}\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">Aktueller Stand </div>\n                    <div class=\"panel-body\">\n                        Status: {{ status }}\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">Kommentare </div>\n                    <div class=\"panel-body\">\n                        <div>\n                            <div *ngFor=\"let comment of comments\">\n                                {{ comment }}\n                            </div>\n                        </div>\n\n                        <div class=\"input-group\">\n                            <textarea class=\"form-control\" rows=\"1\" placeholder=\"Kommentar hinzufügen\" #comment></textarea>\n                            <span class=\"input-group-addon\">\n                                    <span class=\"glyphicon glyphicon-send\" (click)=\"addComment(comment.value)\"></span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">Beschreibung</div>\n                    <div class=\"panel-body\">\n                        {{ description }}\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">Private Tags</div>\n                    <div class=\"panel-body\">\n                        <span *ngFor=\"let tag of tags\">\n                            <span class=\"detail-view--tags\" appHighlightBackground highlightColor=\"gray\">\n                                {{ tag }}\n                            </span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h1>Login</h1>\n</div>\n<div class=\"alert\" [ngClass]=\"{ 'alert-success' : authService.isLoggedIn, 'alert-info' : !authService.isLoggedIn }\">\n    {{message}}\n</div>\n<p>\n    <button class=\"btn btn-default\" (click)=\"login()\" *ngIf=\"!authService.isLoggedIn\">Login</button>\n    <button class=\"btn btn-default\" (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n</p>"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"showMobileMenu()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n                <a class=\"navbar-brand\" routerLink=\"/\">QM</a>\n            </div>\n\n            <div class=\"collapse navbar-collapse\" [ngClass]=\"{ in : isMobileMenu }\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"nav-item\">\n                        <a routerLink=\"\" [routerLinkActive]=\"['nav--active']\" (click)=\"hideMobileMenu()\">Suche und Übersicht</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a routerLink=\"test\" [routerLinkActive]=\"['nav--active']\" (click)=\"hideMobileMenu()\">Präsentieren</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a routerLink=\"admin\" [routerLinkActive]=\"['nav--active']\" (click)=\"hideMobileMenu()\">Admin</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a routerLink=\"login\" [routerLinkActive]=\"['nav--active']\" (click)=\"hideMobileMenu()\">Login</a>\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </nav>\n</div>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<h2>Page not found</h2>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\"row problem-overview\">\n\n    <div class=\"page-header col-md-12\">\n        <h1>Suche und Übersicht</h1>\n    </div>\n\n    <div class=\"col-md-12 problem-overview--data\">\n        <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-default active\">Live Daten</button>\n            <button type=\"button\" class=\"btn btn-default\">Daten</button>\n        </div>\n    </div>\n\n    <app-table-overview [source]=\"problems\" class=\"problem-overview--list\"></app-table-overview>\n\n</div>"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <button type=\"button\" class=\"btn btn-default center-block\" (click)=\"goToDetailPage(previewProblem)\"> \n            Detailansicht\n            <span class=\"glyphicon glyphicon-list-alt\"></span>\n        </button>\n</div>\n\n<div class=\"row problem-preview--button-group\">\n    <button type=\"button\" class=\"btn btn-default\">\n            <span class=\"glyphicon glyphicon-film\"></span>\n            Präsentieren\n        </button>\n    <button type=\"button\" class=\"btn btn-default\">\n            <span class=\"glyphicon glyphicon-user\"></span>\n            Einsteuern\n        </button>\n    <button type=\"button\" class=\"btn btn-default\">\n            <span class=\"glyphicon glyphicon-send\"></span>\n            Weiterleiten\n        </button>\n</div>\n\n<div class=\"row\">\n\n    <h2 class=\"col-md-12 page-header\">\n        {{ previewProblem.titel }} {{ previewProblem.status }}\n    </h2>\n\n    <div class=\"col-md-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Modul\n            </div>\n            <div class=\"panel-body\">\n                {{ previewProblem.module }}\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12 panel\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Beteiligte Personen</div>\n            <div *ngFor=\"let involvedPerson of previewProblem.involvedPersons\" class=\"panel-body\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n                <span>{{ involvedPerson }}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Kommentare </div>\n            <div class=\"panel-body\">\n                <div class=\"problem-preview--comment\">\n                    <span class=\"glyphicon glyphicon-file\"></span>\n                </div>\n                <div class=\"problem-preview--comment\">\n                    <div *ngFor=\"let comment of previewProblem.comments\">\n                        {{ comment }}\n                    </div>\n                </div>\n\n                <div class=\"input-group\">\n                    <textarea class=\"form-control\" rows=\"1\" placeholder=\"Kommentar hinzufügen\" #comment></textarea>\n                    <span class=\"input-group-addon\">\n                        <span class=\"glyphicon glyphicon-send\" (click)=\"addComment(previewProblem.id, comment.value)\"></span>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{ 'col-md-8': isPreview, 'col-md-12': !isPreview }\">\n\n    <div class=\"input-group search-form\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search problem\" #searchFilter (keyup)=\"0\">\n        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></span>\n    </div>\n\n    <table class=\"table table-striped\">\n        <thead>\n            <th></th>\n            <th (click)=\"setSortType('titel')\">\n                Titel\n                <span class=\"sortorder\" [hidden]=\"sortType !== 'titel'\" [ngClass]=\"{ 'reverse': reverse }\"></span>\n            </th>\n            <th (click)=\"setSortType('module')\">\n                Modul\n                <span class=\"sortorder\" [hidden]=\"sortType !== 'module'\" [ngClass]=\"{ 'reverse': reverse }\"></span>\n            </th>\n            <th (click)=\"setSortType('dates')\">\n                Termine\n                <span class=\"sortorder\" [hidden]=\"sortType !== 'dates'\" [ngClass]=\"{ 'reverse': reverse }\"></span>\n            </th>\n            <th (click)=\"setSortType('status')\">\n                Status\n                <span class=\"sortorder\" [hidden]=\"sortType !== 'status'\" [ngClass]=\"{ 'reverse': reverse }\"></span>\n            </th>\n            <th (click)=\"setSortType('kpi')\">\n                KPI\n                <span class=\"sortorder\" [hidden]=\"sortType !== 'kpi'\" [ngClass]=\"{ 'reverse': reverse }\"></span>\n            </th>\n            <th>\n                Aktionen\n            </th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let problem of source | orderBy : [reverse ? sortType : '-' + sortType ] | search: {titel: searchFilter.value} \">\n                <td><input type=\"checkbox\" value=\"problem.id\" (click)=\"showPreview(problem)\" /></td>\n                <td (click)=\"goToDetailPage(problem)\"><u>{{ problem.titel }}</u></td>\n                <td>{{ problem.module }}</td>\n                <td>{{ problem.dates }}</td>\n                <td>{{ problem.status }}</td>\n                <td>{{ problem.kpi }}</td>\n                <td>\n                    <span *ngFor=\"let action of problem.actions\">\n                        <span class=\"glyphicon\" [ngClass]=\"{ 'glyphicon-pencil': action === 'edit', 'glyphicon-trash': action === 'delete' }\"></span>\n                    </span>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<app-preview [previewProblem]=\"previewProblem\" class=\"col-md-4 problem-preview\" *ngIf=\"isPreview\"></app-preview>"

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_problems_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailViewComponent = (function () {
    function DetailViewComponent(ProblemsService, route) {
        this.ProblemsService = ProblemsService;
        this.route = route;
    }
    DetailViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.id = data.problem.id;
            _this.titel = data.problem.titel;
            _this.module = data.problem.module;
            _this.dates = data.problem.dates;
            _this.status = data.problem.status;
            _this.kpi = data.problem.kpi;
            _this.actions = data.problem.actions;
            _this.comments = data.problem.comments;
            _this.editComment = data.problem.comments;
            _this.involvedPersons = data.problem.involvedPersons;
            _this.description = data.problem.description;
            _this.tags = data.problem.tags;
        });
    };
    DetailViewComponent.prototype.canDeactivate = function () {
        // Fix me
        if (this.editComment.length === this.comments.length) {
            return true;
        }
        return window.confirm('Example canDeactivate');
    };
    DetailViewComponent.prototype.addComment = function (comment) {
        this.ProblemsService.addComment(this.id, comment);
    };
    return DetailViewComponent;
}());
DetailViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-detail-view',
        template: __webpack_require__(194),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_problems_service__["a" /* ProblemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_problems_service__["a" /* ProblemsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], DetailViewComponent);

var _a, _b;
//# sourceMappingURL=detail-view.component.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/admin';
                // Set our navigation extras object
                // that passes on our global query params and fragment
                var navigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                // Redirect the user
                _this.router.navigate([redirect], navigationExtras);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(195),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            // User is logged in
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Create a dummy session id
        var sessionId = 123456789;
        // Set our navigation extras object
        // that contains our global query params and fragment
        var navigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };
        // Navigate to the login page with extras
        this.router.navigate(['/login'], navigationExtras);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(true).delay(1000).do(function (val) {
            _this.isLoggedIn = true;
        });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMasterDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminMasterDataComponent = (function () {
    function AdminMasterDataComponent() {
    }
    AdminMasterDataComponent.prototype.ngOnInit = function () {
    };
    return AdminMasterDataComponent;
}());
AdminMasterDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-admin-master-data',
        template: __webpack_require__(192),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [])
], AdminMasterDataComponent);

//# sourceMappingURL=admin-master-data.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(route) {
        this.route = route;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.forEach(function (params) {
            _this.sessionId = params['session_id'];
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__(193),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__(197),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_problems_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverviewComponent = (function () {
    function OverviewComponent(ProblemsService) {
        this.ProblemsService = ProblemsService;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    OverviewComponent.prototype.getProblems = function () {
        var _this = this;
        this.ProblemsService.getProblems().then(function (problems) { return _this.problems = problems; });
    };
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-overview',
        template: __webpack_require__(198),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_problems_service__["a" /* ProblemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_problems_service__["a" /* ProblemsService */]) === "function" && _a || Object])
], OverviewComponent);

var _a;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return CanDeactivateGuard;
}());
CanDeactivateGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], CanDeactivateGuard);

//# sourceMappingURL=can-deactivate-guard.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_admin_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_master_data_admin_master_data_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__["a" /* AdminRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_master_data_admin_master_data_component__["a" /* AdminMasterDataComponent */]
        ]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectivePreloadingStrategy; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectivePreloadingStrategy = (function () {
    function SelectivePreloadingStrategy() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        }
    };
    return SelectivePreloadingStrategy;
}());
SelectivePreloadingStrategy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
], SelectivePreloadingStrategy);

//# sourceMappingURL=selective-preloading-strategy.js.map

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/admin/admin.module": [
		69
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 98;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(125);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[243]);
//# sourceMappingURL=main.bundle.js.map