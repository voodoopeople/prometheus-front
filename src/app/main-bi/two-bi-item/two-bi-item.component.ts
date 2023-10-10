import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-two-bi-item',
  templateUrl: './two-bi-item.component.html',
  styleUrls: ['./two-bi-item.component.css']
})
export class TwoBiItemComponent {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon("pdf-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/file-pdf-box.svg"));

    this.matIconRegistry.addSvgIcon("doc-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/file-document-outline.svg"));
  }
}
