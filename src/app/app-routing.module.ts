import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ChartComponent } from './pages/chart/chart.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  {path: 'contact', component: ContactPageComponent , canActivate:[AuthGuard]},
  {path: 'contact/edit', component: ContactEditComponent , canActivate:[AuthGuard]},
  {path: 'contact/:id', component: ContactDetailsComponent, resolve: {contact: ContactResolverService} , canActivate:[AuthGuard]},
  {path: 'contact/edit/:id', component: ContactEditComponent , canActivate:[AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'chart', component: ChartComponent , canActivate:[AuthGuard]},
  {path: '', component: HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
