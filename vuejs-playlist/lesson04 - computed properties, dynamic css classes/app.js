new Vue({
    el: '#vue-app',
    methods:{
        // addToA: function(){
        //     console.log('Add To A Function Called!')
        //     return this.age + this.a
        // },
        // addToB: function(){
        //     console.log('Add To B Function Called!')
        //     return this.age + this.b
        // }
    },
    data:{
        age: 20,
        a: '',
        b: '',
        available: false,
        nearby: false
    },
    computed:{
        addToA: function(){
            console.log('Add To A Function Called!')
            return this.age + this.a
        },
        addToB: function(){
            console.log('Add To B Function Called!')
            return this.age + this.b
        },
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            } 
        }
    }
});