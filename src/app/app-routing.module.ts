import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './pages/chart/chart.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  {path: 'contact', component: ContactPageComponent},
  {path: 'contact/edit', component: ContactEditComponent},
  {path: 'contact/:id', component: ContactDetailsComponent, resolve: {contact: ContactResolverService}},
  {path: 'contact/edit/:id', component: ContactEditComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'chart', component: ChartComponent},
  {path: '', component: HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
