const app = new Vue({

    el:"#main",
    data:{
        tarea:null,
        tareas: [
            'Aprender vue',
            'Jugar al lolsito',
            'Dormir todo el dia',
            'Comer'
        ]
    },
    methods:{

        agregarTarea(){
            this.tareas.unshift(this.tarea)
        }
    }





})