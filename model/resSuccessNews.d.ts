import { DataNews } from './dataNews';
export interface ResSuccessNews {
    success?: boolean;
    code?: number;
    data?: DataNews;
    message?: string;
}
