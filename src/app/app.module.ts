import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ExportDataComponent,
  ImportDataComponent,
  ModifyDataComponent,
  HomeComponent,
  PageNotFoundComponent,
  NavbarComponent
} from '@app/_components';

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
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
