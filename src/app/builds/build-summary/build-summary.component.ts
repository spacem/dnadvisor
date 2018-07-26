import { Component, OnInit, Input } from '@angular/core';
import { StatService } from '../../core/stat.service';
import { ItemCategoryService } from '../../core/item-category.service';

@Component({
  selector: 'app-build-summary',
  templateUrl: './build-summary.component.html',
  styleUrls: ['./build-summary.component.scss']
})
export class BuildSummaryComponent implements OnInit {

  @Input() buildName: string;
  @Input() build: any;
  stats: any;
  itemsByCategory: {};

  constructor(
    private statService: StatService,
    private itemCategoryService: ItemCategoryService
  ) {
  }

  ngOnInit() {
    if (this.build) {
      console.log(this.build);
      this.stats = this.statService.getBuildStats(this.build);
      this.itemsByCategory = this.itemCategoryService.getItemsByCategory(this.build.items);
    }
  }

  getSaveDate(group) {
    if (this.build.lastUpdate > 0) {
      const lastUpdate = new Date(this.build.lastUpdate);
      return lastUpdate.toLocaleDateString();
    }
  }

  getSaveTime(group) {
    if (this.build.lastUpdate > 0) {
      const lastUpdate = new Date(this.build.lastUpdate);
      return lastUpdate.toLocaleTimeString();
    }
  }

  getBuildSummary(group) {
    let summary = '';

    for (const type of Object.keys(this.itemsByCategory)) {
      const itemsByType = this.itemsByCategory[type];
      if (itemsByType.length > 0) {
        if (summary.length > 0) {
          summary += ', ';
        }
        summary += itemsByType.length + ' ' + type;
      }
    }

    return summary;
  }
}
