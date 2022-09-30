import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
// duotone light regular solid
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(fas, fad, fal, far, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
