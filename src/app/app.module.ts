import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsapiService } from './services/newsapi.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './categories/headlines/headlines.component';
import { TechnewsComponent } from './categories/technews/technews.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MDBBootstrapModule, } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import {MatSelectModule} from '@angular/material/select';
import { LoadinComponent } from './loadin/loadin.component';
import { BusinessnewsComponent } from './categories/businessnews/businessnews.component';
import { EntertainementnewsComponent } from './categories/entertainementnews/entertainementnews.component';
import { HealthnewsComponent } from './categories/healthnews/healthnews.component';
import { SciencenewsComponent } from './categories/sciencenews/sciencenews.component';
import { SportsnewsComponent } from './categories/sportsnews/sportsnews.component';
import { ArticledetailsComponent } from './categories/articledetails/articledetails.component';
import { PricingComponent } from './pricing/pricing.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { FaqComponent } from './faq/faq.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewstellerComponent } from './newsteller/newsteller.component';
import { SearchComponent } from './categories/search/search.component';
import { AdminComponent } from './admin/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    TechnewsComponent,
    HeaderComponent,
    FooterComponent,
    LoadinComponent,
    BusinessnewsComponent,
    EntertainementnewsComponent,
    HealthnewsComponent,
    SciencenewsComponent,
    SportsnewsComponent,
    ArticledetailsComponent,
    PricingComponent,
    ManageaccountComponent,
    ContactComponent,
    UserlistComponent,
    EdituserComponent,
    IndexpageComponent,
    FaqComponent,
    PagenotfoundComponent,
    NewstellerComponent,
    SearchComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCT9oQsOdGU-cjoa4UUWnNBxB4z0JCjjSg",
      authDomain: "moroccan-news.firebaseapp.com",
      projectId: "moroccan-news",
      storageBucket: "moroccan-news.appspot.com",
      messagingSenderId: "721922869140",
      appId: "1:721922869140:web:e1e1e1a5be5a254c55f181"
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
    
  ],
  providers: [
    NewsapiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
