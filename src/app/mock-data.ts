import { Category } from './models/Category';
import { Article } from './models/Article';
import { Comment } from './models/Comment';

export const CATEGORIES: Category[] = [
  { id: 0, name: 'Hírek', color: '#EFB700', iconUrl: 'assets/images/system/nf-news.png' },
  { id: 1, name: 'PC', color: '#AF3DB1', iconUrl: 'assets/images/system/nf-pc.png' },
  { id: 2, name: 'Xbox', color: '#0CAB01', iconUrl: 'assets/images/system/nf-xbox.png' },
  { id: 3, name: 'PS', color: '#0067F3', iconUrl: 'assets/images/system/nf-ps.png' },
  { id: 4, name: 'Switch', color: '#F80000', iconUrl: 'assets/images/system/nf-switch.png' }
];

export const COMMENTS: Comment[] = [
  /*{ id: 0, sender: 'Balázs', date: '2020. 04. 29.', body: 'Nisi id elementum quisque neque eu. S amet in risus sem venenatis. Egestas felis malesuada enim sit en.', article: 0},
  { id: 1, sender: 'Enikő', date: '2020. 04. 20.', body: 'Nirisus sem venenatis. Egestas felis malesuada enim sit en.', article: 1},
  { id: 2, sender: 'Sanyi', date: '2020. 04. 19.', body: 'Nirisus sem venenatis. Egestas felis malesuada enim sit en.', article: 0},*/
];

export const ARTICLES: Article[] = [
];

export const NEWEST_ARTICLE: Article[] = [
];

export const TOP_ARTICLES: Article[] = [

];

export const LATEST_COMMENTS: Comment[] = [

];