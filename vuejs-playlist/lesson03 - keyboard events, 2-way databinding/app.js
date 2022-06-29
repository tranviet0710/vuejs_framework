new Vue({
    el: '#vue-app',
    data:{
        name: '',
        age:''
    },
    methods: {
        type_name(event){
            console.log("You enter name: " + event.target.value); 
        },
        type_age(event){
            console.log("You enter age: " + event.target.value); 
        }
    }
});