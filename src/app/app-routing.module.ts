import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(h => h.HomeModule)
  },
  {
    path: 'question-creator',
    loadChildren: () =>
      import('./question-creator/question-creator.module').then(q => q.QuestionCreatorModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(p => p.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
