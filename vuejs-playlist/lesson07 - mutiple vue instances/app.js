Vue.component(
    'greeting',
    {
        template: '<p>Hello there. My name is {{name}}.<button v-on:click="change_name()">Change name</button></p>',
        data: function(){
            return {
                name : 'VietDEV',
            }
        },
        // data:{
        //     name: 'VietDev',
        // },
        methods:{
            change_name: function(){
                this.name = 'Viet Khung'
            }
        }
    },
)

var one = new Vue({
    el: '#vue-app-1',
    data:{
        title: 'Vue-App-1',

    },
    methods:{

    },
    computed:{
        greet: function(){
            return "Hello from app 1";
        }
    }
});

var two = new Vue({
    el: '#vue-app-2',
    data:{
        title: 'Vue-App-2',
    },
    methods:{
        changeTitle: function(){
            one.title = "App 1 title was changed!"
            alert("App 1 title was changed!");
        },
    },
    computed:{
        greet: function(){
            return "Hello from app 2";
        },
        // automatically called
        // changeTitle: function(){
        //     one.title = "App 1 title was changed!"
        //     alert("App 1 title was changed!");
        // },
        
    }

});

two.title = "App 2 title was changed!"

