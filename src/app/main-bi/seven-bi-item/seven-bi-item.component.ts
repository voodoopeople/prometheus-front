import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-seven-bi-item',
  templateUrl: './seven-bi-item.component.html',
  styleUrls: ['./seven-bi-item.component.css']
})
export class SevenBiItemComponent {
  data = [
    {
      "name": "Series 1",
      "series": [
        { "name": "Point 1", "x": 10, "y": 20, "r": 15 },
        { "name": "Point 2", "x": 15, "y": 25, "r": 20 },
        { "name": "Point 3", "x": 30, "y": 50, "r": 55 },
        { "name": "Point 4", "x": 25, "y": 40, "r": 25 },
        { "name": "Point 5", "x": 35, "y": 30, "r": 20 }
      ]
    },
    {
      "name": "Series 2",
      "series": [
        { "name": "Point 1", "x": 20, "y": 30, "r": 10 },
        { "name": "Point 2", "x": 40, "y": 10, "r": 25 },
        { "name": "Point 3", "x": 50, "y": 20, "r": 45 },
        { "name": "Point 4", "x": 30, "y": 40, "r": 20 },
        { "name": "Point 5", "x": 20, "y": 50, "r": 15 }
      ]
    },
    {
      "name": "Series 3",
      "series": [
        { "name": "Point 1", "x": 35, "y": 20, "r": 25 },
        { "name": "Point 2", "x": 25, "y": 30, "r": 50 },
        { "name": "Point 3", "x": 15, "y": 50, "r": 20 },
        { "name": "Point 4", "x": 45, "y": 40, "r": 25 },
        { "name": "Point 5", "x": 50, "y": 60, "r": 50 }
      ]
    }
  ];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon("pdf-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/file-pdf-box.svg"));

    this.matIconRegistry.addSvgIcon("doc-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/file-document-outline.svg"));
  }

}
