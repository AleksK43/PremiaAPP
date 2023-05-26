

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
import { AdminUserEditComponent } from './Components/admin-user-edit/admin-user-edit.component';
import { DocumentsRepositoryComponent } from './Components/documents-repository/documents-repository.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'UserGrid', component: UserGridComponent, canActivate:[AuthGuard] },
  { path: 'UserView', component: BasicUserViewComponent},
  { path: 'AddInvoice', component: AddInvoiceFormComponent },
  { path: 'SupervisorView', component: SupervisorViewComponent },
  { path: 'InvoiceCheck', component: SupervisorInvoiceCheckComponent },
  { path: 'SuperUserView', component: SuperUserViewComponent },
  { path: 'UserEdit', component: AdminUserEditComponent },
  { path: 'Repository', component: DocumentsRepositoryComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }