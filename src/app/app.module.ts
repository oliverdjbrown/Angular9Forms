import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BindingDataWithNgformComponent } from './binding-data-with-ngform/binding-data-with-ngform.component';
import { BindingDataToModelComponent } from './binding-data-to-model/binding-data-to-model.component';
import { AddingFormHtmlComponent } from './adding-form-html/adding-form-html.component';
import { TrackingStateValidityComponent } from './tracking-state-validity/tracking-state-validity.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    NotFoundComponent,
    BindingDataWithNgformComponent,
    BindingDataToModelComponent,
    AddingFormHtmlComponent,
    TrackingStateValidityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
