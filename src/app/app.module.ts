import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from './login/login.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { AddInvoiceFormComponent } from './add-invoice-form/add-invoice-form.component';
import { InvoiceBonusTableComponent } from './invoice-bonus-table/invoice-bonus-table.component';
import { UserProfitComponent } from './user-profit/user-profit.component';
import { UserProjectsComponent } from './user-projects/user-projects.component';


@NgModule(
    {
        declarations: [AppComponent, LoginComponent, UserGridComponent, AddInvoiceFormComponent, InvoiceBonusTableComponent, UserProfitComponent, UserProjectsComponent], 
        imports: [BrowserModule],
        bootstrap: [AppComponent],
    }
)
export class AppModule{}

