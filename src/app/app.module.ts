import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        LoginComponent,
        // HomeComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
    ],
    bootstrap: []
})
export class AppModule { }