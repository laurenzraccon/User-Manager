import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AddClassComponent } from './class/add-class/add-class.component';
import { DeleteClassComponent } from './class/delete-class/delete-class.component';
import { EditClassComponent } from './class/edit-class/edit-class.component';
import { CreateEvaluationComponent } from './create-evaluation/create-evaluation.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { DeleteEvaluationComponent } from './delete-evaluation/delete-evaluation.component';
import { DeleteGradeComponent } from './delete-grade/delete-grade.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { EditGradeComponent } from './edit-grade/edit-grade.component';
import { EditEvaluationComponent } from './edit-evaluation/edit-evaluation.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { InsertGradeComponent } from './insert-grade/insert-grade.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const routes: Routes = [
  { path: 'app-add-class' , component: AddClassComponent},
  { path: 'app-delete-class' , component: DeleteClassComponent},
  { path: 'app-create-evaluation-class' , component: CreateEvaluationComponent},
  { path: 'app-create-note-class' , component: CreateNoteComponent},
  { path: 'app-delete-evaluation-class' , component: DeleteEvaluationComponent},
  { path: 'app-delete-grade-class' , component: DeleteGradeComponent},
  { path: 'app-delete-note-class' , component: DeleteNoteComponent},
  { path: 'app-edit-grade-class' , component: EditGradeComponent},
  { path: 'app-edit-evaluation-class' , component: EditEvaluationComponent},
  { path: 'app-edit-note-class' , component: EditNoteComponent},
  { path: 'app-edit-class' , component: EditClassComponent},
  { path: 'app-insert-grade-class' , component: InsertGradeComponent},
  { path: 'app-upload-cv-class' , component: UploadCvComponent},
  { path: 'app-dashboard-class' , component: DashboardComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    MatAutocompleteModule,
    MatInputModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
