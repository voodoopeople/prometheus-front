import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as shape from 'd3-shape';
import {PlacementTypes, StyleTypes} from "@swimlane/ngx-charts";
import { Node } from "@swimlane/ngx-graph";
import { Edge } from "@swimlane/ngx-graph";
import { NodePosition } from "@swimlane/ngx-graph";

//import { Edge, Node } from '@swimlane/ngx-graph';


@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {
  isEditorDivVisible: boolean = true;

  tooltipPlacement: PlacementTypes = PlacementTypes.Top;
  styleTypes: StyleTypes = StyleTypes.tooltip;
  name = 'Angular 5';
  //hierarchialGraph = {nodes: [], links: []}
  hierarchialGraph: { nodes: Node[], links: Edge[] } = { nodes: [], links: [] };
  curve = shape.curveBundle.beta(1);
  // curve = shape.curveLinear;

  // Функция для переключения видимости
  toggleDivVisibility() {
    this.showGraph();
    this.isEditorDivVisible = !this.isEditorDivVisible;
  }

  nodes: Node[] = [
    {
      id: 'node1',
      label: 'Node 1',
      position: {
        x: 80,
        y: 30
      },
      data: {
        customColor: '#ff0000'
      }
    },
    {
      id: 'node2',
      label: 'Node 2',
      position: {
        x: 80,
        y: 30
      },
      data: {
        customColor: '#ff0000'
      }
    },
    {
      id: 'node3',
      label: 'Node 3',
      position: {
        x: 8,
        y: 3
      },
      data: {
        customColor: '#ff0000'
      }
    },

    // ... другие узлы
  ];

  links: Edge[] = [
    {
      id: 'edge1',
      source: 'node1',
      target: 'node2',
      label: 'Edge 1'
    },
    {
      id: 'edge2',
      source: 'node1',
      target: 'node3',
      label: 'Edge 2'
    }
    // ... другие связи
  ];

  public ngOnInit():void {
    this.showGraph();
  }

  showGraph() {
    this.hierarchialGraph.nodes = [
      {
        id: 'start',
        label: 'scan',
        dimension: {
          width: 80,
          height: 30
        },
        data: {
          customColor: '#8796c0'
        }
      }, {
        id: '1',
        label: 'Event#a',
        dimension: {
          width: 80,
          height: 30
        },
        data: {
          customColor: '#a8385d'
        }
      }, {
        id: '2',
        label: 'Event#x',
        dimension: {
          width: 80,
          height: 30
        },
        data: {
          customColor: '#aae3f5'
        }
      }, {
        id: '3',
        label: 'Event#b',
        dimension: {
          width: 80,
          height: 30
        },
        data: {
          customColor: '#7aa3e5'
        }
      }, {
        id: '4',
        label: 'Event#c',
        dimension: {
          width: 80,
          height: 30
        },
        data: {
          customColor: '#a27ea8'
        }
      }, {
        id: '5',
        label: 'Event#y',
        dimension: {
          width: 80,
          height: 30
        },
        data: {
          customColor: '#adcded'
        }
      }, {
        id: '6',
        label: 'Event#z',
        dimension: {
          width: 80,
          height: 30
        },
        data: {
          customColor: '#a27ea8'
        }
      }
    ];

    this.hierarchialGraph.links = [
      {
        source: 'start',
        target: '1',
        label: 'Process#1'
      }, {
        source: 'start',
        target: '2',
        label: 'Process#2'
      }, {
        source: '1',
        target: '3',
        label: 'Process#3'
      }, {
        source: '2',
        target: '4',
        label: 'Process#4'
      }, {
        source: '2',
        target: '6',
        label: 'Process#6'
      }, {
        source: '3',
        target: '5',
        label: 'Process#'
      }

    ];
  }
}

/*interface Node {
  id: string;
  label: string;
  position?: string;
}

interface Link {
  source: string;
  target: string;
  label?: string;
}*/
