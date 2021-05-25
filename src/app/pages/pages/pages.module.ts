import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
// import { ChartsModule  } from "ng2-charts";

//modulos
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProgressComponent } from '../progress/progress.component';
import { Grafica1Component } from '../grafica1/grafica1.component';
import { PagesComponent } from '../pages.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


// import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],  
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule
    // ,ChartsModule
  ]
})
export class PagesModule { }
