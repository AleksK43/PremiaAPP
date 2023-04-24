import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from './login/login.component';
import { UserGridComponent } from './user-grid/user-grid.component';


@NgModule(
    {
        declarations: [AppComponent, LoginComponent, UserGridComponent], 
        imports: [BrowserModule],
        bootstrap: [AppComponent],
    }
)
export class AppModule{}

