var app = new Vue({
    el:'#app',
    data:{
        brotou:true,
        frutas:[{nome:'laranja',preco:5.252},
        {nome:'abacaxi',preco:4.244}],
        compono:'<em>'+'Minhas frutas'+'</em>',
        sacola:[]
    },
    methods:{
        brotar(){
            console.log('a');
            this.brotou=!this.brotou;
        },
        adicionaCarrinho(httt,prodselecionado){
          
          this.sacola.push(prodselecionado);
          this.frutas = this.frutas.filter(fru=>fru.nome!=prodselecionado)
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