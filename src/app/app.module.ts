import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BindingDataWithNgformComponent } from './binding-data-with-ngform/binding-data-with-ngform.component';
import { BindingDataToModelComponent } from './binding-data-to-model/binding-data-to-model.component';
import { AddingFormHtmlComponent } from './adding-form-html/adding-form-html.component';
import { TrackingStateValidityComponent } from './tracking-state-validity/tracking-state-validity.component';
import { ValidationVisualFeedbackComponent } from './validation-visual-feedback/validation-visual-feedback.component';
import { DisplayingErrorMessagesComponent } from './displaying-error-messages/displaying-error-messages.component';
import { SelectControlValidationComponent } from './select-control-validation/select-control-validation.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { SubmittingFormDataComponent } from './submitting-form-data/submitting-form-data.component';
import { ExpressServerReceiveFormDataComponent } from './express-server-receive-form-data/express-server-receive-form-data.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { TdfReactiveModelDrivenComponent } from './tdf-reactive-model-driven/tdf-reactive-model-driven.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    NotFoundComponent,
    BindingDataWithNgformComponent,
    BindingDataToModelComponent,
    AddingFormHtmlComponent,
    TrackingStateValidityComponent,
    ValidationVisualFeedbackComponent,
    DisplayingErrorMessagesComponent,
    SelectControlValidationComponent,
    FormValidationComponent,
    SubmittingFormDataComponent,
    ExpressServerReceiveFormDataComponent,
    ErrorHandlingComponent,
    TdfReactiveModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
