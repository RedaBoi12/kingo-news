import { EdituserComponent } from './admin/edituser/edituser.component';
import { AdminGuard } from './services/admin.guard';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SearchComponent } from './categories/search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { child } from 'firebase/database';
import { NewsapiService } from './services/newsapi.service';
import { FaqComponent } from './faq/faq.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { ArticledetailsComponent } from './categories/articledetails/articledetails.component';
import { AuthGuard } from './services/auth.guard';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { ContactComponent } from './contact/contact.component';
import { SportsnewsComponent } from './categories/sportsnews/sportsnews.component';
import { HealthnewsComponent } from './categories/healthnews/healthnews.component';
import { SciencenewsComponent } from './categories/sciencenews/sciencenews.component';
import { BusinessnewsComponent } from './categories/businessnews/businessnews.component';
import { EntertainementnewsComponent } from './categories/entertainementnews/entertainementnews.component';
import { AppComponent } from './app.component';
import { TechnewsComponent } from './categories/technews/technews.component';
import { HeadlinesComponent } from './categories/headlines/headlines.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
    {path: '', component: IndexpageComponent, pathMatch:'full'},
    {path: 'faq', component: FaqComponent},
    {path: 'trending', component: HeadlinesComponent},
    {path: 'trending/:title/:urlToImage/:content/:description/:publishedAt/:url', component: ArticledetailsComponent},
    {path: 'tech', component: TechnewsComponent},
    {path: 'tech/:title/:urlToImage/:content/:description/:publishedAt/:url', component: ArticledetailsComponent},
    {path: 'entertainment', component: EntertainementnewsComponent},
    {path: 'entertainment/:title/:urlToImage/:content/:description/:publishedAt/:url', component: ArticledetailsComponent},
    {path: 'business', component: BusinessnewsComponent},
    {path: 'business/:title/:urlToImage/:content/:description/:publishedAt/:url', component: ArticledetailsComponent},
    {path: 'science', component: SciencenewsComponent},
    {path: 'science/:title/:urlToImage/:content/:description/:publishedAt/:url', component: ArticledetailsComponent},
    {path: 'health', component: HealthnewsComponent},
    {path: 'health/:title/:urlToImage/:content/:description/:publishedAt/:url', component: ArticledetailsComponent},
    {path: 'sports', component: SportsnewsComponent},
    {path: 'sports/:title/:urlToImage/:content/:description/:publishedAt/:url', component: ArticledetailsComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'manage', component: ManageaccountComponent, canActivate: [AuthGuard]},
    {path: 'search', component: SearchComponent},
    {path: 'search/:search', component: SearchComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    {path: 'adminpanel', component: UserlistComponent, canActivate: [AuthGuard]},
    {path: 'edit/:uid', component: EdituserComponent, canActivate: [AuthGuard]},



    {path: '**', component: PagenotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
