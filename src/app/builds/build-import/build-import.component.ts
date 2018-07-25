import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SaveService } from '../../core/save.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-build-import',
  templateUrl: './build-import.component.html',
  styleUrls: ['./build-import.component.scss']
})
export class BuildImportComponent implements OnInit {

  build$: Observable<any>;
  buildName: string;
  constructor(
    private saveService: SaveService
  ) { }

  ngOnInit() {
  }

  onChange(files: FileList) {
    if (files.length) {
      this.build$ = Observable.create(observer => {
        const reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onload = () => {
          const fileName = files[0].name;
          if (fileName && fileName.length > 5) {
            this.buildName = fileName.substr(0, fileName.length - 5);
            this.buildName = this.buildName.replace('dngearsim-', '');
          } else {
            this.buildName = 'imported build';
          }
          observer.next(JSON.parse(reader.result));
        };
      });
    }
  }
  
  copyLocally(build) {
    var newGroupName = this.saveService.importGroup(this.buildName, build.items);
    
    this.saveService.saveBuild(
      newGroupName, 
      newGroupName,
      build);
      
    // $location.path('/build');
    // $location.search('buildName', newGroupName);
  }
}
