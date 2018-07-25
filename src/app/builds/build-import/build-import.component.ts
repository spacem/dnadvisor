import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-import',
  templateUrl: './build-import.component.html',
  styleUrls: ['./build-import.component.scss']
})
export class BuildImportComponent implements OnInit {

  build: any;
  buildName: string;
  constructor() { }

  ngOnInit() {
  }

  onChange(files: FileList) {
    if (files.length) {
      this.buildName = files[0].name;
      const reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload = () => {
        this.build = JSON.parse(reader.result);
        const fileName = files[0].name;
        if (fileName && fileName.length > 5) {
          this.buildName = fileName.substr(0, fileName.length - 5);
          this.buildName = this.buildName.replace('dngearsim-', '');
        } else {
          this.buildName = 'imported build';
        }
      };
    }
  }

  copyLocally() {
  }



}
