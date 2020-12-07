import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Inventory} from '../interfaces/inventory';
import * as c3 from 'c3';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://petstore.swagger.io/v2/store/inventory').subscribe((data: Inventory) => {
      console.log(`Data: ${JSON.stringify(data)}`);
      c3.generate({
        bindto: '#chart',
        oninit: () => {
          console.log('Initialized chart');
        },
        onrendered: () => {
          console.log('Rendered chart');
        },
        data: {
          columns: [
            ['Available', data.available],
            ['Pending', data.pending],
            // ['Sold', data.sold],
          ],
          type: 'bar',
          onclick: (data) => {
            const dataJson = JSON.stringify(data);
            console.log(`Args passed to onclick: ${dataJson}`);
          },
        },
        bar: {
          width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
          }
        },
        padding: {
          top: 20,
          right: 100,
          bottom: 20,
          left: 100,
        },
        transition: {
          duration: 0,
        },
        axis: {
          x: {
            label: {
              text: 'Status',
            },
            tick: {
              rotate: 60,
              multiline: false,
            },
          },
          y: {
            label: {
              text: 'Count',
            },
          },
        },
        point: {
          r: 5,
        },
      });
    });
  }

}
