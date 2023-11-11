import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from './Components/login/login.component';
import { UserGridComponent } from './Components/User Components/user-grid/user-grid.component';
import { AddInvoiceFormComponent } from './Components/User Components/add-invoice-form/add-invoice-form.component';
import { InvoiceBonusTableComponent } from './Components/SuperVisor Components/invoice-bonus-table/invoice-bonus-table.component';
import { UserProfitComponent } from './Components/User Components/user-profit/user-profit.component';
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { AppRoutingModule } from './app-routing.module';
import { BasicUserViewComponent } from './Pages/basic-user-view/basic-user-view.component';
import { SupervisorViewComponent } from './Pages/supervisor-view/supervisor-view.component';
import { UserActiveBonusComponent } from './Components/User Components/user-active-bonus/user-active-bonus.component';
import { SupervisorInvoiceCheckComponent } from './Components/SuperVisor Components/supervisor-invoice-check/supervisor-invoice-check.component';
import { InvoiceCheckerComponent } from './Components/SuperVisor Components/invoice-checker/invoice-checker.component';
import { SuperUserViewComponent } from './Pages/super-user-view/super-user-view.component';
import { SuperUserUserGridComponent } from './Components/Admin Components/super-user-user-grid/super-user-user-grid.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AdminUserEditComponent } from './Components/Admin Components/admin-user-edit/admin-user-edit.component';
import { DocumentsRepositoryComponent } from './Components/documents-repository/documents-repository.component';
import { NgToastModule } from 'ng-angular-popup'; 
import { TokenInterceptor } from "./Interceptors/token.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { AdminCustomerTabComponent } from './Components/Admin Components/admin-customer-tab/admin-customer-tab.component';
import { DocumentEditComponent } from './Components/User Components/document-edit-component/document-edit-component.component';
import { CustomerComponent } from './Components/Admin Components/customer/customer.component';



@NgModule(
    {
        declarations: [AppComponent,
             LoginComponent,
             UserGridComponent,
             AddInvoiceFormComponent, 
             InvoiceBonusTableComponent, 
             UserProfitComponent, 
             PageNotFoundComponent, 
             BasicUserViewComponent, 
             SupervisorViewComponent, 
             UserActiveBonusComponent, 
             SupervisorInvoiceCheckComponent, 
             InvoiceCheckerComponent, 
             SuperUserViewComponent, 
             SuperUserUserGridComponent, 
             AdminUserEditComponent, 
             DocumentsRepositoryComponent,
             AdminCustomerTabComponent,
             DocumentEditComponent,
             CustomerComponent], 
        providers: [{
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true 
        }],
        imports: [BrowserModule,
            AppRoutingModule,
            MatSlideToggleModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            NgToastModule,
            MatPaginatorModule,
            MatTableModule,
            MatCheckboxModule,
            MatIconModule,
            BrowserAnimationsModule],
        bootstrap: [AppComponent],
    }
)
export class AppModule{}

