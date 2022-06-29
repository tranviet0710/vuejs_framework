import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import routes from './routes'
import VueRouter from "vue-router"

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes,
    mode: 'history',
});

// Vue.directive("rainbow", {
//     bind(el, binding, vnode) {
//         el.style.color = "#" + Math.random().toString().slice(2, 8);
//     }
// });

Vue.directive("theme", {
    bind(el, binding, vnode) {
        if (binding.value == "wide") {
            el.style.maxWidth = '1200px';
        } else if (binding.value == "narrow") {
            el.style.maxWidth = '560px';
        }
        if (binding.arg == "column") {
            el.style.background = "red";
            el.style.padding = '20px';
        }

    }
});

// Vue.filter("to_uppercase", function(value) {
//     return value.toUpperCase();
// });

Vue.filter("snippet", function(value) {
    return value.slice(0, 100) + '...';
});


new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})