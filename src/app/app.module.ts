import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { ListProjectComponent } from './menu-project/list-project/list-project.component';
import { NewProjectComponent } from './project/new-project/new-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import { ManagmentProjectComponent } from './project/managment-project/managment-project.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import {RouterOutlet, Routes, RouterModule} from "@angular/router";
import { MatListModule } from '@angular/material/list';
import { SelectActivityComponent } from './menu-project/select-activity/select-activity.component';
import { MatMenuModule } from '@angular/material/menu';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BiMenuComponent } from './main-bi/bi-menu/bi-menu.component';
import { OneBiItemComponent } from './main-bi/one-bi-item/one-bi-item.component';
import { TwoBiItemComponent } from './main-bi/two-bi-item/two-bi-item.component';
import { ThreeBeItemComponent } from './main-bi/three-be-item/three-be-item.component';
import { FourBiItemComponent } from './main-bi/four-bi-item/four-bi-item.component';
import { FiveBiItemComponent } from './main-bi/five-bi-item/five-bi-item.component';
import { SixBiItemComponent } from './main-bi/six-bi-item/six-bi-item.component';
import { SevenBiItemComponent } from './main-bi/seven-bi-item/seven-bi-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorComponent } from './project/behavior/behavior.component';
import { SchemaComponent } from './project/schema/schema.component';
import {MatDialogModule} from "@angular/material/dialog";
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';



const routes: Routes = [
  { path: '', component: IntroPageComponent },
  { path: 'schema', component: SchemaComponent },
  { path: 'themenu', component: ManagmentProjectComponent, children: [
      { path: '', component: EditProjectComponent, outlet: 'project' },
      { path: 'editproject', component: EditProjectComponent, outlet: 'project' },
      { path: 'behavior', component: BehaviorComponent, outlet: 'project' }]
  },
  { path: 'projectmenu', component: SelectActivityComponent },
  { path: 'list', component: ListProjectComponent },
  {path: 'bimenu', component: BiMenuComponent, children: [
      {path: '', component: OneBiItemComponent, outlet: 'bi'},
      {path: 'onebi', component: OneBiItemComponent, outlet: 'bi'},
      {path: 'twobi', component: TwoBiItemComponent, outlet: 'bi'},
      {path: 'threbi', component: ThreeBeItemComponent, outlet: 'bi'},
      {path: 'fourbi', component: FourBiItemComponent, outlet: 'bi'},
      {path: 'fivebi', component: FiveBiItemComponent, outlet: 'bi'},
      {path: 'sixbi', component: SixBiItemComponent, outlet: 'bi'},
      {path: 'sevenbi', component: SevenBiItemComponent, outlet: 'bi'}
    ]
  }
  //{ path: 'bi', component: SomeBiComponentComponent, children: [
      //{ path: 'zaya', component: ZayaComponent, outlet: 'animals' },
      //{ path: 'kisa', component: KisaComponent, outlet: 'animals' }
    //]
  //}
];

@NgModule({
  declarations: [
    AppComponent,
    EditProjectComponent,
    ListProjectComponent,
    NewProjectComponent,
    ManagmentProjectComponent,
    IntroPageComponent,
    SelectActivityComponent,
    BiMenuComponent,
    OneBiItemComponent,
    TwoBiItemComponent,
    ThreeBeItemComponent,
    FourBiItemComponent,
    FiveBiItemComponent,
    SixBiItemComponent,
    SevenBiItemComponent,
    BehaviorComponent,
    SchemaComponent,
  ],
  imports: [
    MatCheckboxModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgxGraphModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    MatListModule,
    MatMenuModule,
    CdkAccordionModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
