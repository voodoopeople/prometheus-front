import {Component, Optional} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import { SchemaComponent } from '../schema/schema.component';
import {MatDialog, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'app-managment-project',
  templateUrl: './managment-project.component.html',
  styleUrls: ['./managment-project.component.css']
})
export class ManagmentProjectComponent {
  /*private modalService: MatDialog;*/
  constructor(@Optional() private modalService: MatDialog, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon("pdf-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/file-pdf-box.svg"));

    this.matIconRegistry.addSvgIcon("doc-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/file-document-outline.svg"));

  }

  openPopUp() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.modalService.open(SchemaComponent, dialogConfig);

    //this.modalService.open(SchemaComponent);
  }

}
