import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from './Components/login/login.component';
import { UserGridComponent } from './Components/user-grid/user-grid.component';
import { AddInvoiceFormComponent } from './Components/add-invoice-form/add-invoice-form.component';
import { InvoiceBonusTableComponent } from './Components/invoice-bonus-table/invoice-bonus-table.component';
import { UserProfitComponent } from './Components/user-profit/user-profit.component';
import { UserProjectsComponent } from './Components/user-projects/user-projects.component';
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { AppRoutingModule } from './app-routing.module';
import { BasicUserViewComponent } from './Components/basic-user-view/basic-user-view.component';
import { SupervisorViewComponent } from './Components/supervisor-view/supervisor-view.component';
import { UserActiveBonusComponent } from './Components/user-active-bonus/user-active-bonus.component';
import { SupervisorInvoiceCheckComponent } from './Components/supervisor-invoice-check/supervisor-invoice-check.component';
import { InvoiceRepositoryComponent } from './Components/invoice-repository/invoice-repository.component';
import { InvoiceCheckerComponent } from './Components/invoice-checker/invoice-checker.component';
import { SuperUserViewComponent } from './Components/super-user-view/super-user-view.component';
import { SuperUserUserGridComponent } from './Components/super-user-user-grid/super-user-user-grid.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminUserEditComponent } from './Components/admin-user-edit/admin-user-edit.component';
import { DocumentsRepositoryComponent } from './Components/documents-repository/documents-repository.component';


@NgModule(
    {
        declarations: [AppComponent, LoginComponent, UserGridComponent, AddInvoiceFormComponent, InvoiceBonusTableComponent, UserProfitComponent, UserProjectsComponent, PageNotFoundComponent, BasicUserViewComponent, SupervisorViewComponent, UserActiveBonusComponent, SupervisorInvoiceCheckComponent, InvoiceRepositoryComponent, InvoiceCheckerComponent, SuperUserViewComponent, SuperUserUserGridComponent, AdminUserEditComponent, DocumentsRepositoryComponent], 
        imports: [BrowserModule, AppRoutingModule, HttpClientModule],
        bootstrap: [AppComponent],
    }
)
export class AppModule{}

