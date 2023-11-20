import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent} from './projects/projects.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: '', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
