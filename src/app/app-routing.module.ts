

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { UserGridComponent } from './Components/user-grid/user-grid.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { BasicUserViewComponent } from './Components/basic-user-view/basic-user-view.component';
import { AddInvoiceFormComponent } from './Components/add-invoice-form/add-invoice-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'UserGrid', component: UserGridComponent },
  { path: 'UserView', component: BasicUserViewComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'AddInvoice', component: AddInvoiceFormComponent },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }