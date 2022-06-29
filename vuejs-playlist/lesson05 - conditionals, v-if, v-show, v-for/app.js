new Vue({
    el: '#vue-app',
    methods:{
        notify: function(element){
           alert(element)
        },
    },
    data:{
        error: false,
        success: false,
        emails: [
            '0984894089n@gmail.com',
            'Long0408Rin@gmail.com',
            'alo@gmail.com',
            'binhnguyen2114@gmail.com',
            'bob26397201@gmail.com',
            'datvinhtran.dut@gmail.com',
            'democode000+1@gmail.com',
            'democode000@gmail.com',
        ],
        xomnhala: [
            { name: 'Viet', age: 21 },
            { name: 'Pho', age: 21 },
            { name: 'Khoa', age: 21 },
            { name: 'Dong', age: 21 },
            { name: 'Bao', age: 21 },
            { name: 'Huy', age: 22 },
        ]
    },
    computed:{
        
    }
});