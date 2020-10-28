import { Items } from './items';
export interface DataNews {
    items?: Array<Items>;
    feedUrl?: string;
    title?: string;
    description?: string;
    link?: string;
    language?: string;
    count?: number;
}
