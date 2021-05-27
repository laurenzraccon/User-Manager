import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AddClassComponent } from './class/add-class/add-class.component';
import { DeleteClassComponent } from './class/delete-class/delete-class.component';
import { EditClassComponent } from './class/edit-class/edit-class.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';
import { CreateEvaluationComponent } from './create-evaluation/create-evaluation.component';
import { EditEvaluationComponent } from './edit-evaluation/edit-evaluation.component';
import { DeleteEvaluationComponent } from './delete-evaluation/delete-evaluation.component';
import { InsertGradeComponent } from './insert-grade/insert-grade.component';
import { EditGradeComponent } from './edit-grade/edit-grade.component';
import { DeleteGradeComponent } from './delete-grade/delete-grade.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';
import { ClassListComponent } from './class/class-list/class-list.component';

//Declarations --> Only Components
@NgModule({
  declarations: [
    AppComponent,
    AddClassComponent,
    DeleteClassComponent,
    EditClassComponent,
    RootNavComponent,
    UploadCvComponent,
    CreateEvaluationComponent,
    EditEvaluationComponent,
    DeleteEvaluationComponent,
    InsertGradeComponent,
    EditGradeComponent,
    DeleteGradeComponent,
    CreateNoteComponent,
    EditNoteComponent,
    DeleteNoteComponent,
    DashboardComponent,
    ClassListComponent
  ],
//Imports: --> Only Module
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
