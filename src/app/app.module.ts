import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // added this
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarModule} from 'primeng/sidebar';
import {DragDropModule} from 'primeng/dragdrop';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelgridComponent } from './panelgrid/panelgrid.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import {InputTextModule} from 'primeng/inputtext';
import { SharedModule, PanelModule ,MultiSelect } from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {ColorPickerModule} from 'primeng/colorpicker';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ListboxModule} from 'primeng/listbox';
import{UserservicesService}from './userservices.service'
import {TableModule} from 'primeng/table';
import { CreateruleComponent } from './createrule/createrule.component';
import {OrderListModule} from 'primeng/orderlist';
import {DataViewModule} from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { RolesComponent } from './roles/roles.component';
import {DialogModule} from 'primeng/dialog';
import {PickListModule} from 'primeng/picklist';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PanelgridComponent,
    DragdropComponent,
    CreateruleComponent,
    RolesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,SidebarModule,DragDropModule
    ,InputTextModule,DropdownModule,ButtonModule,ColorPickerModule
    ,OverlayPanelModule,ListboxModule,TableModule,HttpClientModule,OrderListModule,DataViewModule,ReactiveFormsModule,FormsModule
  ,DialogModule,PickListModule
  ],
  providers: [UserservicesService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
