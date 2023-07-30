import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '@pages/main/main.component';
import { DesarrolloComponent } from '@pages/desarrollo/desarrollo.component';
import { QaComponent } from '@pages/qa/qa.component';
import { TestComponent } from './shared/components/test/test.component';

const routes: Routes = [
/*   { path: 'main', component: TestComponent }, */
  { path: 'main', component: MainComponent },
  { path: 'desarrollo', component: DesarrolloComponent },
  { path: 'qa', component: QaComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
