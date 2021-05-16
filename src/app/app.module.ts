import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SharedModule } from './shared/shared.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Grafica1Component } from './pages/grafica1/grafica1.component';
// import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,    
    // LoginComponent,
    // RegisterComponent,
    
    NopagefoundComponent,    
    // BreadcrumbsComponent,
    // SidebarComponent,
    // HeaderComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Grafica1Component,
    // PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    // SharedModule
    // LoginComponent,
    // RegisterComponent
    AuthModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
