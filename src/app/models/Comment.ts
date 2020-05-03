export class Comment {
    id: string;
    sender: string;
    date: number;
    body: string;
    article: string;

    constructor(id: string, sender: string, date: number, body: string, article: string) {
        this.id = id;
        this.sender = sender;
        this.date = date;
        this.body = body;
        this.article = article;
    }

}