import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/_components';
import {
  ExportDataComponent,
  ImportDataComponent,
  ModifyDataComponent,
  PageNotFoundComponent,
} from './pages';

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
        pathMatch: 'full',
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
