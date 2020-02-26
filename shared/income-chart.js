import { LitElement, html } from 'lit-element';
import 'highcharts';

export class IncomeChart extends LitElement {

    firstUpdated(changedProperties) {
        this._enableChart();
    }

    render() {
        return html`
        <div id='container' style='width:500px;height:300px;border: 1px red solid;'></div>
      `;
    }

    _enableChart() {
        Highcharts.chart(this.shadowRoot.querySelector('#container'), {
            chart: {
                type: 'column'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ]
            },
            yAxis: {
                allowDecimals: true,
                min: 0,
                title: {
                    text: 'Values in Euro'
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Income',
                data: [2229.9, 2171.5, 1560.4, 2129.2, 2144.0, 1976.0, 1735.6, 2108.5, 2216.4, 1594.1, 1195.6, 1154.4],
                stack: 'male'
            }, {
                name: 'Spendings',
                data: [1919, 1530, 1106.4, 1429.2, 1244.0, 1176.0, 1195.6, 1148.5, 1716.4, 1194.1, 1895.6, 1954.4],
                stack: 'female'
            }],

            title: {
                text: 'Yearly Income'
            },
            subtitle: {
                text: 'Yearly Spending'
            },
        });
    }

}

customElements.define('income-chart', IncomeChart);