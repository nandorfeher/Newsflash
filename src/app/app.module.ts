import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopArticlesComponent } from './components/top-articles/top-articles.component';
import { LatestCommentsComponent } from './components/latest-comments/latest-comments.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    BannerComponent,
    CategoryItemComponent,
    ArticleContainerComponent,
    SidebarComponent,
    TopArticlesComponent,
    LatestCommentsComponent,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
