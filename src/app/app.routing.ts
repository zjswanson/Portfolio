import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [

  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    component: HomeComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
