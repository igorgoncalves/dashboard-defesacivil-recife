<template>
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
  data: () => ({
    chartOptions: {
      title: {
        text: 'Abertura de chamados nos bairros com maiores ocorrencias'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2012
      }
    },
    series: [
    {
      name: 'IBURA',
      data: [531, 2734, 979, 827, 910, 1344, 1036, 303]
    },
    {
      name: 'JORDAO',
      data: [141, 816, 428, 164, 172, 295, 222, 59]
    },
    {
      name: 'GUABIRABA',
      data: [289, 1115, 202, 126, 139, 126, 105, 35]
    },
    {
      name: 'DOIS UNIDOS',
      data: [239, 348, 261, 213, 377, 350, 397, 98],
    },
    {
      name: 'ALTO JOSE BONIFACIO',
      data: [94, 160, 185, 169, 214, 205, null, null],
    }
    ]}
  })
}
</script>

<style lang="scss">
</style>
