import { SectionComponent } from './section/section.component';
import { ToolsComponent } from './tools/tools.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule,MatCheckboxModule,MatMenuModule,MatSelectModule,MatIconModule,MatToolbarModule,MatGridListModule} from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MenuComponent } from './menu/menu.component';
import { GridComponent } from './grid/grid.component';
import { TreeComponent } from './grid/tree/tree.component';
import { ViewComponent } from './grid/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolsComponent,
    SectionComponent,
    GridComponent,
    TreeComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    CommonModule,
    MatGridListModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule { }
export class PizzaPartyAppModule { }
