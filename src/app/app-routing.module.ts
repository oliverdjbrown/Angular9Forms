import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { ExpressServerReceiveFormDataComponent } from './express-server-receive-form-data/express-server-receive-form-data.component';
import { SubmittingFormDataComponent } from './submitting-form-data/submitting-form-data.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { SelectControlValidationComponent } from './select-control-validation/select-control-validation.component';
import { DisplayingErrorMessagesComponent } from './displaying-error-messages/displaying-error-messages.component';
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
  { path: 'displaying-error-messages', component: DisplayingErrorMessagesComponent},
  { path: 'select-control-validation', component: SelectControlValidationComponent},
  { path: 'form-validation', component: FormValidationComponent},
  { path: 'submitting-form-data', component: SubmittingFormDataComponent},
  { path: 'express-server-receive-form-data', component: ExpressServerReceiveFormDataComponent},
  { path: 'error-handling', component: ErrorHandlingComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
