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
/* tslint:disable:no-unused-variable member-ordering */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
let NewsService = class NewsService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://fifa-news-api.herokuapp.com/api';
        this.defaultHeaders = new HttpHeaders();
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
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    findNewsSoccer(type, observe = 'body', reportProgress = false) {
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (type) {
            queryParameters = queryParameters.set('type', type.join(COLLECTION_FORMATS['csv']));
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        return this.httpClient.get(`${this.basePath}/news`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
NewsService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(BASE_PATH)), tslib_1.__param(2, Optional()),
    tslib_1.__metadata("design:paramtypes", [HttpClient, String, Configuration])
], NewsService);
export { NewsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlmYS1uZXdzLWFwaS1jbGllbnQvIiwic291cmNlcyI6WyJhcGkvbmV3cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCx1REFBdUQ7O0FBRXZELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUEyQixlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUNWLE1BQWdDLHNCQUFzQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUE2QixZQUFZLENBQUM7QUFNL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUEwQixjQUFjLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUEwQyxrQkFBa0IsQ0FBQztBQUlyRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBTXBCLFlBQXNCLFVBQXNCLEVBQWdDLFFBQWdCLEVBQWMsYUFBNEI7UUFBaEgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpsQyxhQUFRLEdBQUcseUNBQXlDLENBQUM7UUFDeEQsbUJBQWMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUd2QyxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsSUFBSSxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssY0FBYyxDQUFDLFFBQWtCO1FBQ3JDLE1BQU0sSUFBSSxHQUFHLHFCQUFxQixDQUFDO1FBQ25DLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQzVCLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDbEIsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWFNLGNBQWMsQ0FBQyxJQUFtQyxFQUFFLFVBQWUsTUFBTSxFQUFFLGlCQUEwQixLQUFLO1FBRzdHLElBQUksZUFBZSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksMEJBQTBCLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxJQUFJLEVBQUU7WUFDTixlQUFlLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkY7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRWxDLGlDQUFpQztRQUNqQyxJQUFJLGlCQUFpQixHQUFhO1lBQzlCLGtCQUFrQjtTQUNyQixDQUFDO1FBQ0YsTUFBTSx3QkFBd0IsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlHLElBQUksd0JBQXdCLElBQUksU0FBUyxFQUFFO1lBQ3ZDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsdUNBQXVDO1FBQ3ZDLE1BQU0sUUFBUSxHQUFhO1lBQ3ZCLGtCQUFrQjtTQUNyQixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxPQUFPLEVBQzlEO1lBQ0ksTUFBTSxFQUFFLGVBQWU7WUFDdkIsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDO0NBRUosQ0FBQTtBQTVFWSxXQUFXO0lBRHZCLFVBQVUsRUFBRTtJQU9zQyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFDLG1CQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQSxFQUFvQixtQkFBQSxRQUFRLEVBQUUsQ0FBQTs2Q0FBdkUsVUFBVSxVQUE2RSxhQUFhO0dBTjdILFdBQVcsQ0E0RXZCO1NBNUVZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN3YWdnZXIgQVBJIEZJRkEuY29tIE5ld3NcbiAqIFRoaXMgaXMgYSBzYW1wbGUgQVBJIERvY3VtZW50YXRpb24gYWJvdXQgRklGQSBuZXdzLiBUaGUgYXBpIGNvbnN1bWVzIHRoZSBkYXRhIGZyb20gdGhlIG9mZmljaWFsIEZJRkEgUlNTLWZlZWQgaHR0cHM6Ly93d3cuZmlmYS5jb20vcnNzLWZlZWRzLyBZb3UgY2FuIHVzZSB0aGlzIEFQSSBhcyBsb25nIGFzIHRoZSBmaWZhIHJzcy1mZWVkIGlzIGF2YWlsYWJsZS5cbiAqXG4gKiBPcGVuQVBJIHNwZWMgdmVyc2lvbjogMS4wLjBcbiAqIENvbnRhY3Q6IHJpY2h5Y2g5MkBnbWFpbC5jb21cbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuLmdpdFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby11bnVzZWQtdmFyaWFibGUgbWVtYmVyLW9yZGVyaW5nICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLFxuICAgICAgICAgSHR0cFJlc3BvbnNlLCBIdHRwRXZlbnQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9lbmNvZGVyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXNTdWNjZXNzTmV3cyB9IGZyb20gJy4uL21vZGVsL3Jlc1N1Y2Nlc3NOZXdzJztcblxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ld3NTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwczovL2ZpZmEtbmV3cy1hcGkuaGVyb2t1YXBwLmNvbS9hcGknO1xuICAgIHB1YmxpYyBkZWZhdWx0SGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBAT3B0aW9uYWwoKUBJbmplY3QoQkFTRV9QQVRIKSBiYXNlUGF0aDogc3RyaW5nLCBAT3B0aW9uYWwoKSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIGlmIChiYXNlUGF0aCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoIHx8IGNvbmZpZ3VyYXRpb24uYmFzZVBhdGggfHwgdGhpcy5iYXNlUGF0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25zdW1lcyBzdHJpbmdbXSBtaW1lLXR5cGVzXG4gICAgICogQHJldHVybiB0cnVlOiBjb25zdW1lcyBjb250YWlucyAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIGZhbHNlOiBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGNhbkNvbnN1bWVGb3JtKGNvbnN1bWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBmb3JtID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbnN1bWUgb2YgY29uc3VtZXMpIHtcbiAgICAgICAgICAgIGlmIChmb3JtID09PSBjb25zdW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRmluZHMgbmV3cyBzb2NjZXIgYnkgdHlwZSBvZiBuZXdzXG4gICAgICogWW91IGNhbiBjaG9vc2UgYSB0eXBlIG9mIG5ld3Mgc2VuZGluZyB0aGUgcXVlcnkgJiMzOTt0JiMzOTsgcGFyYW0gaW4gdGhlIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gdHlwZSBUeXBlIG5ld3MgdGhhdCBuZWVkIHRvIGJlIGNvbnNpZGVyZWQgZm9yIGZpbHRlclxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5kTmV3c1NvY2Nlcih0eXBlPzogQXJyYXk8JzEnIHwgJzInIHwgJzMnIHwgJzQnPiwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxSZXNTdWNjZXNzTmV3cz47XG4gICAgcHVibGljIGZpbmROZXdzU29jY2VyKHR5cGU/OiBBcnJheTwnMScgfCAnMicgfCAnMycgfCAnNCc+LCBvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8UmVzU3VjY2Vzc05ld3M+PjtcbiAgICBwdWJsaWMgZmluZE5ld3NTb2NjZXIodHlwZT86IEFycmF5PCcxJyB8ICcyJyB8ICczJyB8ICc0Jz4sIG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8UmVzU3VjY2Vzc05ld3M+PjtcbiAgICBwdWJsaWMgZmluZE5ld3NTb2NjZXIodHlwZT86IEFycmF5PCcxJyB8ICcyJyB8ICczJyB8ICc0Jz4sIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG5cbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1ldGVycyA9IG5ldyBIdHRwUGFyYW1zKHtlbmNvZGVyOiBuZXcgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMoKX0pO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gcXVlcnlQYXJhbWV0ZXJzLnNldCgndHlwZScsIHR5cGUuam9pbihDT0xMRUNUSU9OX0ZPUk1BVFNbJ2NzdiddKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XG5cbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxSZXNTdWNjZXNzTmV3cz4oYCR7dGhpcy5iYXNlUGF0aH0vbmV3c2AsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==