import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResSuccessNews } from '../model/resSuccessNews';
import { Configuration } from '../configuration';
export declare class NewsService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    findNewsSoccer(type?: Array<'1' | '2' | '3' | '4'>, observe?: 'body', reportProgress?: boolean): Observable<ResSuccessNews>;
    findNewsSoccer(type?: Array<'1' | '2' | '3' | '4'>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResSuccessNews>>;
    findNewsSoccer(type?: Array<'1' | '2' | '3' | '4'>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResSuccessNews>>;
}
