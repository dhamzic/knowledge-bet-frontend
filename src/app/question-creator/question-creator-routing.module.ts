import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionCreatorComponent } from './question-creator.component';
import { CategoryResolver } from './resolvers/category-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: QuestionCreatorComponent,
        resolve: {
            resolvedCategories: CategoryResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionCreatorRoutingModule {
}
