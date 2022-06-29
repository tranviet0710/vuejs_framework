new Vue({
    el:'#vue-app',
    data: {
        name: '*****',
        job: '******',
        facebook: 'http://www.facebook.com/pikapika0710',
        instagram: 'http://www.instagram.com/tranviet._.0710',

        str: 'Contact me for more!!!',


        websiteTag: '<a href="http://www.facebook.com/pikapika0710">Facebook (via v-html)</a>'
    },    
    methods: {
        greet: function(feeling){
            return "Hello! My name is " + this.name + ", I am a " + this.job 
            + ", and I am feeling " + feeling + " !!!"
        },

        change_name: function(event){
            this.name = event.target.value    
        },

        change_job: function(event){
            this.job = event.target.value
        }
    }
});