import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookConsultComponent } from './Healthpages/book-consult/book-consult.component';
import { FileaclaimComponent } from './Healthpages/health-claims/fileaclaim/fileaclaim.component';
import { HealthClaimStatusComponent } from './Healthpages/health-claims/health-claim-status/health-claim-status.component';
import { HealthClaimViewComponent } from './Healthpages/health-claims/health-claim-view/health-claim-view.component';
import { HealthClaimsComponent } from './Healthpages/health-claims/health-claims.component';
import { HealthContactUsComponent } from './Healthpages/health-contact-us/health-contact-us.component';
import { HealthDocumentsComponent } from './Healthpages/health-documents/health-documents.component';
import { HealthEmailComponent } from './Healthpages/health-email/health-email.component';
import { HealthFaqComponent } from './Healthpages/health-faq/health-faq.component';
import { HealthPolicyComponent } from './Healthpages/health-policy/health-policy.component';
import { HealthProfileComponent } from './Healthpages/health-profile/health-profile.component';
import { HealthComponent } from './Healthpages/health/health.component';
import { Home1Component } from './Healthpages/home1/home1.component';
import { LocateHospitalComponent } from './Healthpages/locate-hospital/locate-hospital.component';
import { DashBoradMoterComponent } from './Moter/dash-borad-moter/dash-borad-moter.component';
import { MoterManagePolicyComponent } from './Moter/moter-manage-policy/moter-manage-policy.component';
import { MoterPolicyComponent } from './Moter/moter-policy/moter-policy.component';
import { WelcomeMoterComponent } from './Moter/welcome-moter/welcome-moter.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BuyInsuranceComponent } from './pages/buy-insurance/buy-insurance.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AllPolicyComponent } from './pages/home/all-policy/all-policy.component';
import { HomeComponent } from './pages/home/home.component';
import { TermLifeComponent } from './pages/home/term-life/term-life.component';
import { VariableAnnuitiesComponent } from './pages/home/variable-annuities/variable-annuities.component';
import { WholeLifeComponent } from './pages/home/whole-life/whole-life.component';
import { LoginComponent } from './pages/login/login.component';
import { MailComponent } from './pages/mail/mail.component';
import { AssistanceMailComponent } from './pages/Member/claim/assistance-mail/assistance-mail.component';
import { AssistanceComponent } from './pages/Member/claim/assistance/assistance.component';
import { ClaimComponent } from './pages/Member/claim/claim.component';
import { RaisedclaimComponent } from './pages/Member/claim/raisedclaim/raisedclaim.component';
import { DashboradComponent } from './pages/Member/dashborad/dashborad.component';
import { DocxforLifeComponent } from './pages/Member/docxfor-life/docxfor-life.component';
import { HelpComponent } from './pages/Member/help/help.component';
import { ProfileComponent } from './pages/Member/profile/profile.component';
import { WelcomeComponent } from './pages/Member/welcome/welcome.component';
import { PortalComponent } from './pages/portal/portal.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AdminGuard } from './services/admin.guard';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'welcome',component:LoginComponent,pathMatch:'full'},
  {path:'signin',component:SigninComponent,pathMatch:'full'},
  {path:'buy',component:BuyInsuranceComponent,pathMatch:'full'},
  {path:'user',component:DashboradComponent,
  children: [
    {
      path: '',
      component: WelcomeComponent,
    },
    {
      path: 'allpolicy',
      component: AllPolicyComponent,
    },
    {
      path: 'variable-annuities',
      component: VariableAnnuitiesComponent,
    },
    {
      path: 'Term-life',
      component: TermLifeComponent,
    },
    {
      path: 'Whole-life',
      component: WholeLifeComponent,
    },
    {
      path: 'Documents',
      component: DocxforLifeComponent,
    },
    {
      path: 'help',
      component: HelpComponent,
    },
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'mail',
      component: MailComponent,
    },
    {path:'404',component:NotFoundComponent},
    {
      path: 'claim',
      component: ClaimComponent,
      children: [
                    {
                      path: 'raised',
                      component: RaisedclaimComponent,
                    },
                    {
                      path: 'assistance',
                      component: AssistanceComponent,
                    }
      ]
    }
  ],
},

{
  path:'Health',component:HealthComponent,
children: [
  {
    path: '',
    component: Home1Component,
  },
  {
    path: 'locate',
    component: LocateHospitalComponent,
  },
  {
    path: 'consult',
    component: BookConsultComponent,
  },
  {
    path: 'profile',
    component: HealthProfileComponent,
  },
  {
    path: 'policy',
    component: HealthPolicyComponent,
  },
  {
    path: 'documents',
    component: HealthDocumentsComponent,
  },
  {
    path: 'claims',
    component: HealthClaimsComponent,
  },
  {
    path: 'FAQ',
    component: HealthFaqComponent,
  },
  {
    path: 'contactUs',
    component: HealthContactUsComponent,
  },
  {
    path: 'mail',
    component: HealthEmailComponent,
  },
  { path: 'claimStatus',
   component: HealthClaimStatusComponent
  },
  { path: 'viewDeatils', 
  component: HealthClaimViewComponent
  },
  { path: 'fileClaims', 
  component: FileaclaimComponent
  },
]
},
{path:'Moter',component:DashBoradMoterComponent,
  children: [
    {
      path: '',
      component: WelcomeMoterComponent,
    },
    {
      path: 'policy',
      component: MoterPolicyComponent,
    },
    {
      path: 'ManagePolicy',
      component: MoterManagePolicyComponent,
    }
  ]
},
  {path:'Registration',component:RegistrationComponent,pathMatch:'full'},
  {path:'portal',component:PortalComponent,pathMatch:'full'},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
