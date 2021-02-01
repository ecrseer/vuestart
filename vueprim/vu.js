var app = new Vue({
    el:'#app',
    data:{
        brotou:false,
        frutas:['laranja','abacaxi'],
        compono:'<em>'+'Caju'+'</em>'
    },
    methods:{
        brotar(){
            console.log('a');
            this.brotou=!this.brotou;
        }
    },
    beforeCreate:function(){
        this.compono = '<em> carregando...</em>'
    },
    filters:{
        precificacao(vl){
            return vl.toFixed(2);
        }
    }
})