import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, NavbarComponent } from '@app/_components';
import { TableModule } from './_modules/table/table.module';
import {
  ExportDataComponent,
  ImportDataComponent,
  ModifyDataComponent,
  PageNotFoundComponent,
} from '@app/pages';

@NgModule({
  declarations: [
    AppComponent,
    ImportDataComponent,
    ExportDataComponent,
    ModifyDataComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
