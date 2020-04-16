import { ValidationVisualFeedbackComponent } from './validation-visual-feedback/validation-visual-feedback.component';
import { TrackingStateValidityComponent } from './tracking-state-validity/tracking-state-validity.component';
import { BindingDataToModelComponent } from './binding-data-to-model/binding-data-to-model.component';
import { BindingDataWithNgformComponent } from './binding-data-with-ngform/binding-data-with-ngform.component';
import { AddingFormHtmlComponent } from './adding-form-html/adding-form-html.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent},
  { path: 'adding-form-html', component: AddingFormHtmlComponent},
  { path: 'binding-data-with-ngform', component: BindingDataWithNgformComponent},
  { path: 'binding-data-to-model', component: BindingDataToModelComponent},
  { path: 'tracking-state-validity', component: TrackingStateValidityComponent},
  { path: 'validation-visual-feedback', component: ValidationVisualFeedbackComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
