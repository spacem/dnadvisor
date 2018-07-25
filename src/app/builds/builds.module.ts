import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildImportComponent } from './build-import/build-import.component';
import { BuildItemListComponent } from './build-item-list/build-item-list.component';
import { BuildItemComponent } from './build-item/build-item.component';
import { BuildListComponent } from './build-list/build-list.component';
import { BuildStatsComponent } from './build-stats/build-stats.component';
import { BuildSummaryComponent } from './build-summary/build-summary.component';
import { BuildComponent } from './build/build.component';
import { ReloadBuildComponent } from './reload-build/reload-build.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { ExportComponent } from './export/export.component';
import { CoreModule } from '../core/core.module';
import { BuildsRoutingModule } from './builds-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    BuildsRoutingModule,
    CoreModule,
    TranslateModule.forChild()
  ],
  declarations: [
    BuildImportComponent,
    BuildItemListComponent,
    BuildItemComponent,
    BuildListComponent,
    BuildStatsComponent,
    BuildSummaryComponent,
    BuildComponent,
    ReloadBuildComponent,
    ViewGroupComponent,
    ExportComponent
  ],
  providers: [
  ],
  exports: [
    BuildItemComponent
  ]
})
export class BuildsModule { }
