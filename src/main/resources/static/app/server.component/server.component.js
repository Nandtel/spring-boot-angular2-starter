System.register(['angular2/core', 'angular2/common', 'angular2/http', "../service/server.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, server_service_1;
    var ServerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (server_service_1_1) {
                server_service_1 = server_service_1_1;
            }],
        execute: function() {
            ServerComponent = (function () {
                function ServerComponent(serverService) {
                    this.serverService = serverService;
                }
                ServerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    return this.serverService.getRandomNumber()
                        .subscribe(function (number) { return _this.number = number; }, function (error) { return _this.errorMessage = error; });
                };
                ServerComponent = __decorate([
                    core_1.Component({
                        selector: 'server',
                        templateUrl: 'app/server.component/server.component.html',
                        styleUrls: ['app/server.component/server.component.css'],
                        providers: [server_service_1.ServerService, http_1.HTTP_PROVIDERS],
                        directives: [common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [server_service_1.ServerService])
                ], ServerComponent);
                return ServerComponent;
            }());
            exports_1("ServerComponent", ServerComponent);
        }
    }
});
