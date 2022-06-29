new Vue({
    el: '#vue-app',
    data: {
        age: 21,
        x:0,
        y:0,
        count: 0,
    },
    methods:{
        subtract: function(amount){
            this.age = this.age - amount;
        },
        add: function(amount){
            this.age = this.age + amount;
        },        
        update_coordinate: function(event){
            console.log(event)
            this.x = event.offsetX
            this.y = event.offsetY
        },
        click_once: function(){
            this.count++;
            alert("You just can click me once time!")
        },
        prevent_acessing: function(){
            alert("https://google.com")
        },

        warn(message, event){
            if(event){
                event.preventDefault()
            }
            alert(message)
        }
    }
});