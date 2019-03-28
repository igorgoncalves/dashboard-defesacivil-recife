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
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Ocorrencias em chamados'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Alagamentos',
            y: 1.21,
            sliced: true,
            selected: true
        }, {
            name: 'Arvores em Risco',
            y: 11.5
        }, {
            name: 'Desabamento Parcial Imoveis',
            y: 2.34
        }, {
            name: 'Deslizamentos de Barreiras',
            y: 33.92
        }, {
            name: 'Imoveis Alagados',
            y: 1.20
        }, {
            name: 'Imoveis com Danos/Risco',
            y: 32.73
        }, {
            name: 'Invasao de Terreno de Auxilio Moradia',
            y: 4.06
        }, {
            name: 'Muro com Danos',
            y: 8.4427
        }, {
            name: 'Tombamento de Arvores',
            y: 1.72
        }]
    }]
    }
  })
}
</script>

<style lang="scss">
</style>
