import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildComponent } from './build/build.component';
import { BuildImportComponent } from './build-import/build-import.component';
import { BuildListComponent } from './build-list/build-list.component';

const routes: Routes = [
  { path: '', component: BuildListComponent },
  { path: 'import', component: BuildImportComponent },
  { path: ':buildName', component: BuildComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildsRoutingModule { }
