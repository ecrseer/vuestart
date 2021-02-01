var app = new Vue({
    el:'#app',
    data:{
        brotou:false,
        frutas:['laranja','abacaxi'],
    },
    methods:{
        brotar(){
            console.log('a');
            this.brotou=!this.brotou;
        }
    }
})