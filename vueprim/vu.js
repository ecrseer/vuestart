var app = new Vue({
    el:'#app',
    data:{
        brotou:false,
        frutas:[{nome:'laranja',preco:5.252},{nome:'abacaxi',preco:4.244}],
        compono:'<em>'+'Minhas frutas'+'</em>'
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
            return "R$"+vl.toFixed(1);
        }
    }
})