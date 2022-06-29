new Vue({
    el: '#vue-app',
    data:{
        output: 'output',
    },
    methods:{
        submit: function(event){
            var input = this.$refs.input.value;
            var test = this.$refs.test.innerText;
            console.log(input);
            console.log(test);
            this.output = input;
        }
    }
});
