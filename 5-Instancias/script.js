/*

--PARA QUE FUNCIONE DEBE ESTAR DECLARADO AL PRRINCIPIO PARA QUE EL COMPILADOR LO DECTECTE ANTES



*/const appPuente =new Vue({

    data:{
        global:"dato global"
    }

})
const app = new Vue({

    el:"#main",
    
    data:{
        titulo:"Instancia 1",
        heredado: appPuente.global

    },
})
const app2 = new Vue({

    el:"#app2",
    data:{
        titulo:"Instancia 2",
        heredado: appPuente.global

    },
})
const app3 = new Vue({

    el:"#app3",
    
    data:{
        titulo:"Instancia 3",
        heredado: appPuente.global

    },
})
