import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HomeComponent, NavbarComponent } from '@app/_components';
import { TableModule } from '@app/_modules';
import {
  ExportDataComponent,
  ImportDataComponent,
  ModifyDataComponent,
  PageNotFoundComponent,
} from '@app/pages';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
