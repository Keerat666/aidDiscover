import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListingFormComponent } from './listing-form/listing-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { TrackerComponent } from './tracker/tracker.component';
import { SinglePostComponent } from './single-post/single-post.component';
const appRoutes: Routes = [
  { path: 'create_post', component: ListingFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: '', component: HomeComponent },
  { path: 'full_post', component: SinglePostComponent },




];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListingFormComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    MyProfileComponent,
    AboutUsComponent,
    TrackerComponent,
    SinglePostComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
