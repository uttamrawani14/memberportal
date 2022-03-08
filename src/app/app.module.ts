import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './services/auth.interceptor';
import { PortalComponent } from './pages/portal/portal.component';
import { LoginComponent } from './pages/login/login.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { BuyInsuranceComponent } from './pages/buy-insurance/buy-insurance.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { WelcomeComponent } from './pages/Member/welcome/welcome.component';
import { DashboradComponent } from './pages/Member/dashborad/dashborad.component';
import { ProfileComponent } from './pages/Member/profile/profile.component';
import { SidebarComponent } from './pages/Member/sidebar/sidebar.component';
import { ClaimComponent } from './pages/Member/claim/claim.component';
import { RaisedclaimComponent } from './pages/Member/claim/raisedclaim/raisedclaim.component';
import { AssistanceComponent } from './pages/Member/claim/assistance/assistance.component';
import { AssistanceMailComponent } from './pages/Member/claim/assistance-mail/assistance-mail.component';
import { AllPolicyComponent } from './pages/home/all-policy/all-policy.component';
import { VariableAnnuitiesComponent } from './pages/home/variable-annuities/variable-annuities.component';
import { TermLifeComponent } from './pages/home/term-life/term-life.component';
import { WholeLifeComponent } from './pages/home/whole-life/whole-life.component';
import { ManageComponent } from './pages/home/manage/manage.component';
import { DocxforLifeComponent } from './pages/Member/docxfor-life/docxfor-life.component';
import { HelpComponent } from './pages/Member/help/help.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MailComponent } from './pages/mail/mail.component';
import { SidenaveComponent } from './Healthpages/sidenave/sidenave.component';
import { HealthComponent } from './Healthpages/health/health.component';
import { Home1Component } from './Healthpages/home1/home1.component';
import { LifeChartComponent } from './chart/life-chart/life-chart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookConsultComponent } from './Healthpages/book-consult/book-consult.component';
import { HealthClaimsComponent } from './Healthpages/health-claims/health-claims.component';
import { HealthDocumentsComponent } from './Healthpages/health-documents/health-documents.component';
import { HealthEmailComponent } from './Healthpages/health-email/health-email.component';
import { HealthFaqComponent } from './Healthpages/health-faq/health-faq.component';
import { HealthPolicyComponent } from './Healthpages/health-policy/health-policy.component';
import { HealthContactUsComponent } from './Healthpages/health-contact-us/health-contact-us.component';
import { LocateHospitalComponent } from './Healthpages/locate-hospital/locate-hospital.component';
import { HealthdonutComponent } from './Healthpages/healthdonut/healthdonut.component';
import { HealthProfileComponent } from './Healthpages/health-profile/health-profile.component';
import { PlanUploadDocComponent } from './Healthpages/plan-upload-doc/plan-upload-doc.component';
import { ClaimHelpdeskDialogComponent } from './Healthpages/claim-helpdesk-dialog/claim-helpdesk-dialog.component';
import { FileaclaimComponent } from './Healthpages/health-claims/fileaclaim/fileaclaim.component';
import { UploadDialogComponent } from './Healthpages/upload-dialog/upload-dialog.component';
import { HealthClaimStatusComponent } from './Healthpages/health-claims/health-claim-status/health-claim-status.component';
import { HealthClaimViewComponent } from './Healthpages/health-claims/health-claim-view/health-claim-view.component';
import { FileClaimComponent } from './components/file-claim/file-claim.component';
import { SidenavBarMoterComponent } from './Moter/sidenav-bar-moter/sidenav-bar-moter.component';
import { DashBoradMoterComponent } from './Moter/dash-borad-moter/dash-borad-moter.component';
import { WelcomeMoterComponent } from './Moter/welcome-moter/welcome-moter.component';
import { MoterPolicyComponent } from './Moter/moter-policy/moter-policy.component';
import { MoterManagePolicyComponent } from './Moter/moter-manage-policy/moter-manage-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    LoginComponent,
    NavbarComponent,
    SigninComponent,
    FooterComponent,
    HomeComponent,
    BuyInsuranceComponent,
    RegistrationComponent,
    WelcomeComponent,
    DashboradComponent,
    ProfileComponent,
    SidebarComponent,
    ClaimComponent,
    RaisedclaimComponent,
    AssistanceComponent,
    AssistanceMailComponent,
    AllPolicyComponent,
    VariableAnnuitiesComponent,
    TermLifeComponent,
    WholeLifeComponent,
    ManageComponent,
    DocxforLifeComponent,
    HelpComponent,
    ContactComponent,
    MailComponent,
    SidenaveComponent,
    HealthComponent,
    Home1Component,
    LifeChartComponent,
    NotFoundComponent,
    BookConsultComponent,
    HealthClaimsComponent,
    HealthDocumentsComponent,
    HealthEmailComponent,
    HealthFaqComponent,
    HealthPolicyComponent,
    HealthContactUsComponent,
    LocateHospitalComponent,
    HealthdonutComponent,
    HealthProfileComponent,
    PlanUploadDocComponent,
    ClaimHelpdeskDialogComponent,
    FileaclaimComponent,
    UploadDialogComponent,
    HealthClaimStatusComponent,
    HealthClaimViewComponent,
    FileClaimComponent,
    SidenavBarMoterComponent,
    DashBoradMoterComponent,
    WelcomeMoterComponent,
    MoterPolicyComponent,
    MoterManagePolicyComponent,
    


  ],
  imports: [
    BrowserModule,HttpClientModule,BrowserAnimationsModule,ReactiveFormsModule,FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    NgxUiLoaderModule, 
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatGridListModule,MatTooltipModule,
    MatButtonModule, CKEditorModule,
    MatIconModule,MatDialogModule,NgxChartsModule,
    MatSnackBarModule,MatMenuModule,MatBadgeModule,
MatProgressBarModule,
MatCardModule,MatSlideToggleModule,MatRadioModule,
    MatToolbarModule,MatListModule,MatSidenavModule,MatCheckboxModule,MatDatepickerModule,MatNativeDateModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
