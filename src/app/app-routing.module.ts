import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatSearchComponent } from './components/cat-search/cat-search.component';

const routes: Routes = [
  { path: 'cat-search', component: CatSearchComponent },
  { path: '', redirectTo: '/cat-search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

