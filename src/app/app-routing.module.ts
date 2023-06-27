import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ExportDataComponent,
  ImportDataComponent,
  ModifyDataComponent,
} from '@app/_components';

const routes: Routes = [
  { path: 'export', component: ExportDataComponent },
  { path: 'import', component: ImportDataComponent },
  { path: 'modify', component: ModifyDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
