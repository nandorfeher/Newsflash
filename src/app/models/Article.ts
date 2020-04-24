import { Category } from './Category';

export class Article {
    id: number;
    name: string;
    category: Category;
    leadImageUrl: string;
    body: string;
    date: string;
}