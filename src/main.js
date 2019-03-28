// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import HighchartsVue from 'highcharts-vue'
import Highcharts from "highcharts"
import drilldown from "highcharts/modules/drilldown"
import mapInit from 'highcharts/modules/map'
import addWorldMap from '@/js/worldmap'

drilldown(Highcharts);
mapInit(Highcharts);
// addWorldMap(Highcharts);

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

// Sync store with router
sync(store, router)

Vue.use(HighchartsVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
