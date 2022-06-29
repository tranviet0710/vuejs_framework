import Vue from 'vue'
import App from './App.vue'
// import xomnhala from './NewApp.vue'

// Vue.component('xomnhala',xomnhala);
export const bus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App)
})