(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('fifa-news-api-client', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (global = global || self, factory(global['fifa-news-api-client'] = {}, global.ng.core, global.ng.common.http));
}(this, (function (exports, core, http) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    /**
    * CustomHttpUrlEncodingCodec
    * Fix plus sign (+) not encoding, so sent as blank space
    * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
    */
    var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
        __extends(CustomHttpUrlEncodingCodec, _super);
        function CustomHttpUrlEncodingCodec() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
            k = _super.prototype.encodeKey.call(this, k);
            return k.replace(/\+/gi, '%2B');
        };
        CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
            v = _super.prototype.encodeValue.call(this, v);
            return v.replace(/\+/gi, '%2B');
        };
        return CustomHttpUrlEncodingCodec;
    }(http.HttpUrlEncodingCodec));

    var BASE_PATH = new core.InjectionToken('basePath');
    var COLLECTION_FORMATS = {
        'csv': ',',
        'tsv': '   ',
        'ssv': ' ',
        'pipes': '|'
    };

    var Configuration = /** @class */ (function () {
        function Configuration(configurationParameters) {
            if (configurationParameters === void 0) { configurationParameters = {}; }
            this.apiKeys = configurationParameters.apiKeys;
            this.username = configurationParameters.username;
            this.password = configurationParameters.password;
            this.accessToken = configurationParameters.accessToken;
            this.basePath = configurationParameters.basePath;
            this.withCredentials = configurationParameters.withCredentials;
        }
        /**
         * Select the correct content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param contentTypes - the array of content types that are available for selection
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        Configuration.prototype.selectHeaderContentType = function (contentTypes) {
            var _this = this;
            if (contentTypes.length == 0) {
                return undefined;
            }
            var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return contentTypes[0];
            }
            return type;
        };
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        Configuration.prototype.selectHeaderAccept = function (accepts) {
            var _this = this;
            if (accepts.length == 0) {
                return undefined;
            }
            var type = accepts.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return accepts[0];
            }
            return type;
        };
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        Configuration.prototype.isJsonMime = function (mime) {
            var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        };
        return Configuration;
    }());

    /**
     * Swagger API FIFA.com News
     * This is a sample API Documentation about FIFA news. The api consumes the data from the official FIFA RSS-feed https://www.fifa.com/rss-feeds/ You can use this API as long as the fifa rss-feed is available.
     *
     * OpenAPI spec version: 1.0.0
     * Contact: richych92@gmail.com
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */
    var NewsService = /** @class */ (function () {
        function NewsService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'https://fifa-news-api.herokuapp.com/api';
            this.defaultHeaders = new http.HttpHeaders();
            this.configuration = new Configuration();
            if (basePath) {
                this.basePath = basePath;
            }
            if (configuration) {
                this.configuration = configuration;
                this.basePath = basePath || configuration.basePath || this.basePath;
            }
        }
        /**
         * @param consumes string[] mime-types
         * @return true: consumes contains 'multipart/form-data', false: otherwise
         */
        NewsService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                    var consume = consumes_1_1.value;
                    if (form === consume) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        NewsService.prototype.findNewsSoccer = function (type, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (type) {
                queryParameters = queryParameters.set('type', type.join(COLLECTION_FORMATS['csv']));
            }
            var headers = this.defaultHeaders;
            // to determine the Accept header
            var httpHeaderAccepts = [
                'application/json'
            ];
            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            if (httpHeaderAcceptSelected != undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            return this.httpClient.get(this.basePath + "/news", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NewsService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], NewsService);
        return NewsService;
    }());

    var APIS = [NewsService];

    var ApiModule = /** @class */ (function () {
        function ApiModule(parentModule, http) {
            if (parentModule) {
                throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
            }
            if (!http) {
                throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                    'See also https://github.com/angular/angular/issues/20575');
            }
        }
        ApiModule_1 = ApiModule;
        ApiModule.forRoot = function (configurationFactory) {
            return {
                ngModule: ApiModule_1,
                providers: [{ provide: Configuration, useFactory: configurationFactory }]
            };
        };
        var ApiModule_1;
        ApiModule = ApiModule_1 = __decorate([
            core.NgModule({
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    NewsService
                ]
            }),
            __param(0, core.Optional()), __param(0, core.SkipSelf()),
            __param(1, core.Optional()),
            __metadata("design:paramtypes", [ApiModule,
                http.HttpClient])
        ], ApiModule);
        return ApiModule;
    }());

    exports.APIS = APIS;
    exports.ApiModule = ApiModule;
    exports.BASE_PATH = BASE_PATH;
    exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
    exports.Configuration = Configuration;
    exports.NewsService = NewsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fifa-news-api-client.umd.js.map
