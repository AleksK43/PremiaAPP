

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { UserGridComponent } from './Components/user-grid/user-grid.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { BasicUserViewComponent } from './Components/basic-user-view/basic-user-view.component';
import { AddInvoiceFormComponent } from './Components/add-invoice-form/add-invoice-form.component';
import { SupervisorViewComponent } from './Components/supervisor-view/supervisor-view.component';
import { SupervisorInvoiceCheckComponent } from './Components/supervisor-invoice-check/supervisor-invoice-check.component';
import { SuperUserViewComponent } from './Components/super-user-view/super-user-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'UserGrid', component: UserGridComponent },
  { path: 'UserView', component: BasicUserViewComponent},
  { path: 'AddInvoice', component: AddInvoiceFormComponent },
  { path: 'SupervisorView', component: SupervisorViewComponent },
  { path: 'InvoiceCheck', component: SupervisorInvoiceCheckComponent },
  { path: 'SuperUserView', component: SuperUserViewComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }