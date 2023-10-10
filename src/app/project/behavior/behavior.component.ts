import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import * as cytoscape from 'cytoscape';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent {
  private cy: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.cy = cytoscape({
      container: this.el.nativeElement.querySelector('#cy'),
      elements: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'ab', source: 'a', target: 'b' } }
      ],
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)'
          }
        }
      ],
      layout: {
        name: 'grid',
        rows: 1
      }
    });

    // Добавление обработчика для кликов по узлам
    this.cy.on('tap', 'node', (event : any) => {
      let node = event.target;
      this.editNode(node);
    });

    // Добавление обработчика для кликов по рёбрам
    this.cy.on('tap', 'edge', (event : any) => {
      let edge = event.target;
      this.editEdge(edge);
    });
  }

  editNode(node: any) {
    // Здесь можно добавить логику для редактирования узла
    // Например, можно изменить метку узла
    console.log('Это сообщение от Angular компонента!!!! 2222222222');
    node.data('label', 'Новое имя');
  }

  editEdge(edge: any) {
    // Здесь можно добавить логику для редактирования ребра
    // Например, можно изменить стиль ребра
    console.log('Это сообщение от Angular компонента! 11111111111111');
    edge.style('line-color', 'red');
  }

  ngOnDestroy() {
    // Уничтожьте экземпляр Cytoscape при уничтожении компонента

    this.cy.destroy();
  }
}
