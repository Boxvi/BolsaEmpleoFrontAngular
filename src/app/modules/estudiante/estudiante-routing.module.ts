import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonalFormComponent } from "./personal-form/personal-form.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'personal-form', component: PersonalFormComponent },
  { path: 'personal-form/:id', component: PersonalFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }