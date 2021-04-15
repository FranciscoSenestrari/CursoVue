const app = new Vue({
el:'#app',
data:{
    personas:[]
},
methods:{
},
computed:{
},
mounted(){
   axios.get("https://jsonplaceholder.typicode.com/users").then((resp=T)=>{this.personas=resp.data}
   );
}
})