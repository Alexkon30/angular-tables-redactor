import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ExportDataComponent,
  ImportDataComponent,
  ModifyDataComponent,
  HomeComponent,
  PageNotFoundComponent,
} from '@app/_components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'modify',
        component: ModifyDataComponent,
      },
      {
        path: 'import',
        component: ImportDataComponent,
      },
      {
        path: 'export',
        component: ExportDataComponent,
      },
      {
        path: '',
        redirectTo: 'modify',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
