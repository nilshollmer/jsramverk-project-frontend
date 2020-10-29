import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { DatastreamService } from '@app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    bells: number;
    rings: number;
    pokedollar: number;
    rupees: number;
    timeAndDate: string;
    sizeOfChart = 10;
    currencies = {
        bells: 0,
        rings: 0,
        pokedollar: 0,
        rupees: 0,
    }


    public lineChartData: ChartDataSets[] = [
        { data: [], label: 'Rings' },
        { data: [], label: 'Bells' },
        { data: [], label: 'Rupees' },
        { data: [], label: 'Pokedollar' },
    ];
    public lineChartLabels: Label[] = [];

    public lineChartColors: Color[] = [
        {
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)',
        },
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
    public lineChartPlugins = [];
    constructor( private dsService: DatastreamService ) { }

    ngOnInit() {
        this.loadChart();
    }

    loadChart() {
        this.dsService.listen('init').subscribe(res => {
            res["data"].forEach(element => {
                this.updateValues(element);
            });
        });
        this.dsService.listen('valueupdate').subscribe(res => {
            if (this.lineChartLabels.length > this.sizeOfChart) {
                this.lineChartLabels.shift();
                this.lineChartData.forEach(element => {
                    element.data.shift();
                })
            }
            this.updateValues(res);
        })
    }

    updateValues(values) {
        this.lineChartData[0].data.push(values['rings'])
        this.lineChartData[1].data.push(values['bells'])
        this.lineChartData[2].data.push(values['rupees'])
        this.lineChartData[3].data.push(values['pokedollar'])
        this.lineChartLabels.push(values['timeof'])
        this.rings = values['rings'].toFixed(4);
        this.bells = values['bells'].toFixed(4);
        this.rupees = values['rupees'].toFixed(4);
        this.pokedollar = values['pokedollar'].toFixed(4);
        this.timeAndDate = values['timeof'] + " " + values['dateof']
    }
}
