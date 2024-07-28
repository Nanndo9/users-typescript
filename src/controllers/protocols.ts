/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpResponse<T> {
    statusCode: htppStatusCode;
    body: T;
}

export interface HttpRequest<B> {
    params?: any;
    headers?: any;
    body: B;
}

export enum htppStatusCode{
    OK=200,
    CREATED=201,
    BAD_REQUEST=400,
    INTERNAL_SERVER_ERROR=500,
}

export interface Icontroller {
    handle(HttpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}
