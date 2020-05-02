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

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EditorComponent } from './components/editor/editor.component';
import { ArticleService } from './services/article.service';

const config = {
  apiKey: "AIzaSyAfovSTpyhhb6WfUjSuPxDWLIwY-wDYSd4",
  authDomain: "newsflash-c80e1.firebaseapp.com",
  databaseURL: "https://newsflash-c80e1.firebaseio.com",
  projectId: "newsflash-c80e1",
  storageBucket: "newsflash-c80e1.appspot.com",
  messagingSenderId: "144813477395",
  appId: "1:144813477395:web:7ab3a500118ddd9ae7f9e6",
  measurementId: "G-W5CDZQZ9YC"
};

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
    ArticlePageComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
