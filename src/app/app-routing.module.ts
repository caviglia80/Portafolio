import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesarrolloComponent } from '@pages/desarrollo/desarrollo.component';

const routes: Routes = [
  { path: 'CV', component: DesarrolloComponent },
  { path: '', redirectTo: '/CV', pathMatch: 'full' },
  { path: '**', redirectTo: '/CV', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
