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


@NgModule(
    {
        declarations: [AppComponent, LoginComponent, UserGridComponent, AddInvoiceFormComponent, InvoiceBonusTableComponent, UserProfitComponent, UserProjectsComponent, PageNotFoundComponent, BasicUserViewComponent], 
        imports: [BrowserModule, AppRoutingModule],
        bootstrap: [AppComponent],
    }
)
export class AppModule{}

