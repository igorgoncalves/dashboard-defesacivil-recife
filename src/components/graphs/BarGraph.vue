<template>
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>

let Highcharts = require("highcharts")

export default {
  data: () => ({
    chartOptions: {
        chart: {
        type: 'column'
    },
    title: {
        text: 'Metragem de lona usada no período'
    },
    subtitle: {
        text: 'Clique nas colunas para ver os valores mensais'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total de Metros de lona'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.0f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b>   metros<br/>'
    },

    "series": [
        {
            "name": "Metragem por ano",
            "colorByPoint": true,
            "data": [
                {
                    "name": "2014",
                    "y": 13696,
                    "drilldown": "Chrome"
                },
                {
                    "name": "2015",
                    "y": 29520,
                    "drilldown": "Firefox"
                },
                {
                    "name": "2016",
                    "y": 60360,
                    "drilldown": "Internet Explorer"
                },
                {
                    "name": "2017",
                    "y": 76960,
                    "drilldown": "Safari"
                },
                {
                    "name": "2018",
                    "y": 59595,
                    "drilldown": "Edge"
                },
                {
                    "name": "2019",
                    "y": 8580,
                    "drilldown": "Opera"
                }
            ]
        }
    ],
    "drilldown": {
        "series": [
            {
                "name": "2015",
                "id": "Chrome",
                "data":[
                    ['julho',   4776],
                    ['agosto',   2840],
                    ['setembro',    4320],
                    ['outubro'	,    1120],
                    ['novembro',  160],
                    ['dezembro',  480]
                ]
            },
            {
                "name": "2015",
                "id": "Firefox",
                "data": [
                    ["janeiro",	1280],
                    ["fevereiro",	1520],
                    ["marco",	12960],
                    ["abril",	480],
                    ["maio",	2240],
                    ["junho",	4560],
                    ["julho",	3040],
                    ["agosto",	640],
                    ["setembro",	280],
                    ["outubro",	440],
                    ["novembro",	160],
                    ["dezembro",	1920]
                ]
            },
            {
                "name": "2016",
                "id": "Internet Explorer",
                "data": [
                    ["janeiro",	5580],
                    ["fevereiro", 2800],
                    ["marco", 7000],
                    ["abril", 7680],
                    ["maio", 8260],
                    ["junho", 9330],
                    ["julho", 1930],
                    ["agosto", 440],
                    ["setembro",120],
                    ["outubro",	1120],
                    ["novembro",	560],
                    ["dezembro",	5540],
                ]
            },
            {
                "name": "Safari",
                "id": "Safari",
                "data": [
                    ["janeiro",	2560],
                    ["fevereiro",	720],
                    ["marco",	14640],
                    ["abril",	8480],
                    ["maio",	18400],
                    ["junho",	12560],
                    ["julho",	15640],
                    ["agosto",	960],
                    ["setembro",	1880],
                    ["outubro",	160],
                    ["novembro",	600],
                    ["dezembro",	360]
                ]
            },
            {
                "name": "Edge",
                "id": "Edge",
                "data": [
                    ["janeiro",	6420],
                    ["fevereiro", 6975],
                    ["marco",	6660],
                    ["abril",	28610],
                    ["maio",	6870],
                    ["junho",	640],
                    ["julho",	1820],
                    ["agosto",	0],
                    ["setembro", 1440],
                    ["outubro",	160],
                    ["novembro",	0],
                    ["dezembro",	0]
                ]
            },
            {
                "name": "Opera",
                "id": "Opera",
                "data": [
                    ["janeiro",	4380],
                    ["fevereiro",	2440],
                    ["marco",	1760]
                ]
            }
        ]
    }
    }
  })
}
</script>

<style lang="scss">
</style>
