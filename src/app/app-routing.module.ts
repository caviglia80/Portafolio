import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DesarrolloComponent } from '@pages/desarrollo/desarrollo.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: '', redirectTo: '/CV', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
