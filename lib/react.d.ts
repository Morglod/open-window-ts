import { OpenWindowFeatures } from './index';
export declare function openWindowReact(component: any, params: {
    title?: string;
    appendHead?: string;
    appendBody?: string;
} & OpenWindowFeatures): Window | null;
