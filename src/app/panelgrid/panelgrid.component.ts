import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panelgrid',
  templateUrl: './panelgrid.component.html',
  styles:[`
        .ui-g div {
            background-color: #cce4f7;
            text-align: center;
            color: #333333;
            border: 1px solid #e0eefa;
        }
    `],
})
export class PanelgridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
