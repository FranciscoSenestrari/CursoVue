const app =new Vue({

    el:"#app",
    data:{
        mostrar:false,
        tareas:[
            {titulo:"Tittulo Tarea 1", state:false},
            {titulo:"Tittulo Tarea 2", state:false},
            {titulo:"Tittulo Tarea 3", state:false},
            {titulo:"Tittulo Tarea 4", state:false}
        ]

    },
    methods:{
        completarTarea(item){
            item.state = !item.state;
        },
        btnMostrar(){
            this.mostrar =!this.mostrar;
        }

    },
    computed:{
        
    }



})