import { Context } from 'hono';
export declare const errorFilter: (error: Error, c: Context) => Promise<Response>;
