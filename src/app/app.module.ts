import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from './Components/login/login.component';
import { UserGridComponent } from './Components/user-grid/user-grid.component';
import { AddInvoiceFormComponent } from './Components/add-invoice-form/add-invoice-form.component';
import { InvoiceBonusTableComponent } from './Components/invoice-bonus-table/invoice-bonus-table.component';
import { UserProfitComponent } from './Components/user-profit/user-profit.component';
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { AppRoutingModule } from './app-routing.module';
import { BasicUserViewComponent } from './Pages/basic-user-view/basic-user-view.component';
import { SupervisorViewComponent } from './Pages/supervisor-view/supervisor-view.component';
import { UserActiveBonusComponent } from './Components/user-active-bonus/user-active-bonus.component';
import { SupervisorInvoiceCheckComponent } from './Components/supervisor-invoice-check/supervisor-invoice-check.component';
import { InvoiceCheckerComponent } from './Components/invoice-checker/invoice-checker.component';
import { SuperUserViewComponent } from './Pages/super-user-view/super-user-view.component';
import { SuperUserUserGridComponent } from './Components/super-user-user-grid/super-user-user-grid.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AdminUserEditComponent } from './Components/admin-user-edit/admin-user-edit.component';
import { DocumentsRepositoryComponent } from './Components/documents-repository/documents-repository.component';
import { NgToastModule } from 'ng-angular-popup'; 
import { TokenInterceptor } from "./Interceptors/token.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';



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
             DocumentsRepositoryComponent], 
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
            BrowserAnimationsModule],
        bootstrap: [AppComponent],
    }
)
export class AppModule{}

