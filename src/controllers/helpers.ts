import { htppStatusCode, HttpResponse } from './protocols';

export const ok = <T>(body: any): HttpResponse<T> => ({
    statusCode: htppStatusCode.OK,
    body,
});

export const created = <T>(body: any): HttpResponse<T> => ({
    statusCode: htppStatusCode.CREATED,
    body,
});

export const badRequest = (message: string): HttpResponse<string> => {
    return {
        statusCode: htppStatusCode.BAD_REQUEST,
        body: message,
    };
};

export const internalServerError = (): HttpResponse<string> => {
    return {
        statusCode: htppStatusCode.INTERNAL_SERVER_ERROR,
        body: 'Something went wrong',
    };
};
