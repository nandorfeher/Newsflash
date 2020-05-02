import { Category } from './Category';

export class Article {
    id: string;
    name: string;
    categoryId: number;
    leadImageUrl: string;
    body: string;
    date: number;
    views: number;

    constructor(id: string, name: string, categoryId: number, leadImageUrl: string, body: string, date: number, views: number) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.leadImageUrl = leadImageUrl;
        this.body = body;
        this.date = date;
        this.views = views;
    }

}