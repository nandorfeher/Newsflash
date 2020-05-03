import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'editor', component: EditorComponent },
  {path: '404', component: DashboardComponent},
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
