const app = new Vue(
    {
        el:"#main",
        data:{
            tarea:null,
            tareas:[
                {titulo:"Estudiar",status:false},
                {titulo:"Comer",status:true},
                {titulo:"Jugar",status:false},
                {titulo:"Dibujar",status:false},
                {titulo:"Caminar",status:false},
                 ],


            animal:[

                {nombre:"perro",type:"domestico",status:true},
                {nombre:"gato",type:"domestico",status:true},
                {nombre:"leon",type:"salvaje",status:false},


                
            ],
        },
        methods:{
            add(){

               this.tareas.unshift({titulo:this.tarea,status:false})
          
            }
        },
        computed:{
            //filtra las verdadderas
            mostrarTrue(){
                return  this.tareas.filter( item  => item.status)

            },
            mostrarPorTitulo()
            {
                return this.tareas.filter(item => item.titulo.includes(this.tarea))
            }

        }
    }
)