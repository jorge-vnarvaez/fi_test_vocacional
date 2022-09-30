/**
 * * Archivo de configuración de registro de almacenamientos centralizados
 * ? La lógica es registra un store y su almacenador correspondiente
 */

import Vue from 'vue'
// import store from '../store'

import { mixinFI } from '../store/_fi'
import { mixinUser } from '../store/_user'

Vue.mixin(mixinUser);
Vue.mixin(mixinFI);

