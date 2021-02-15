var app = new Vue({
    el:'#app',
    data:{
        tipofruta:[{
            aspera:201,
            dura:402,
            macia:301},
            {as:201,ma:301}
        ],
        bckColor:'darkslategrey',
        brotou:true,
        frutas:[{id:23,nome:'laranja',
        preco:5.252,qtd:42,star:6},
        {id:25,nome:'abacaxi',preco:4.244,
        qtd:32,star:2}],
        compono:'<em>'+'Minhas frutas'+'</em>',
        sacola:[],
        mostraSaco:false,
        sacolado:true,
        meunome:'nao pode',
        meunomefa:'igual',
        darkmode_ap1:false,
        tipofrutas:['alecrim','dourado'],

    },
    methods:{
        brotar(){            
            this.brotou=!this.brotou;
        },
        adicionaCarrinho(httt,idprodselec){
            
          this.sacola.push(this.frutas.find(fru=>fru.id==idprodselec));
          
        },
        mostraSacola(){
            this.mostraSaco=!this.mostraSaco;
        },
        mContCss(nber,fruta){
            console.log('motd call'+fruta.star)
            return fruta.star - nber>=0;
            return nber>3?false:true;
        },
        ActvDarkMod(){
           this.darkmode_ap1 = !this.darkmode_ap1;
           
        }
    },
    beforeCreate:function(){
        this.compono = '<em> carregando...</em>'
    },
    filters:{
        precificacao(vl){
            return "R$"+vl.toFixed(1);
        }
    },
        computed:{
            total(){
                let tota = 0;
                tota =tota+ this.sacola.reduce(
                    (acumulador,produ)=>acumulador+produ.preco,0);
                    return tota;
            },
            frutascomputd(){
                return this.frutas;
            }
        }
})