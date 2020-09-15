/**
 * Shrimp Farm Application
 * Service Contract
 *
 * OpenAPI spec version: 1.0.0
 * Contact: patti_gm2010@live.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../api/encoder';

import { Observable }                                        from 'rxjs';

import { ApiResponse } from '../model/apiResponse';
import { Farm } from '../model/farm';

import { BASE_PATH }                     from '../api/variables';
import { Configuration }                                     from '../api/configuration';


@Injectable()
export class FarmService {

    protected basePath = 'http://localhost:9000/sfarm/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Management of farms
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createFarm(body: Farm, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public createFarm(body: Farm, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public createFarm(body: Farm, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public createFarm(body: Farm, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createFarm.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<ApiResponse>(`${this.basePath}/farm`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a farm from database
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteFarm(body?: Farm, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public deleteFarm(body?: Farm, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public deleteFarm(body?: Farm, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public deleteFarm(body?: Farm, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.delete<ApiResponse>(`${this.basePath}/farm`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find farm by id
     * 
     * @param farmId Farm´s id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFarmById(farmId: string, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public getFarmById(farmId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public getFarmById(farmId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public getFarmById(farmId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (farmId === null || farmId === undefined) {
            throw new Error('Required parameter farmId was null or undefined when calling getFarmById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<ApiResponse>(`${this.basePath}/farm/getFarmById/${encodeURIComponent(String(farmId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a farm from database
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFarms(observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public getFarms(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public getFarms(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public getFarms(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ApiResponse>(`${this.basePath}/farm`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get total size of Farm
     * 
     * @param farmId Farm´s id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTotalSize(farmId: string, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public getTotalSize(farmId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public getTotalSize(farmId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public getTotalSize(farmId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (farmId === null || farmId === undefined) {
            throw new Error('Required parameter farmId was null or undefined when calling getTotalSize.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<ApiResponse>(`${this.basePath}/farm/getTotalSize/${encodeURIComponent(String(farmId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update the fields of farm
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateFarm(body: Farm, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
    public updateFarm(body: Farm, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
    public updateFarm(body: Farm, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
    public updateFarm(body: Farm, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateFarm.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<ApiResponse>(`${this.basePath}/farm`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
