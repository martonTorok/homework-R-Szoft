import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';


import { AppComponent } from './app.component';
import { RegistryFormComponent } from './registry/registry-form/registry-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistryViewComponent } from './registry/registry-view/registry-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistryFormComponent,
    RegistryViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
