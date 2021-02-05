var app = new Vue({
    el:'#app',
    data:{
        brotou:true,
        frutas:[{id:23,nome:'laranja',preco:5.252},
        {id:25,nome:'abacaxi',preco:4.244}],
        compono:'<em>'+'Minhas frutas'+'</em>',
        sacola:[]
    },
    methods:{
        brotar(){
            console.log('a');
            this.brotou=!this.brotou;
        },
        adicionaCarrinho(httt,idprodselec){
            console.log('d'
                );
          this.sacola.push(this.frutas.find(fru=>fru.id==idprodselec));
          this.frutas = this.frutas.filter(
              fru=>fru.id!=idprodselec)
        }
    },
    beforeCreate:function(){
        this.compono = '<em> carregando...</em>'
    },
    filters:{
        precificacao(vl){
            return "R$"+vl.toFixed(1);
        },
        computed:{
           total(){
               return this.sacola
           }
        },
    }
})