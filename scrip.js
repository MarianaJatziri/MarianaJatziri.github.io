const app=new Vue({
    el:'#contenido',
    data:{
        libros:[
            {nombre:'La reina Roja', cantidad:1, precioU:400 ,total:0, validar:false },
            {nombre:'Nosotros en la luna', cantidad:1, precioU:500 ,total:0, validar:false},
            {nombre:'Todo lo que nunca fuimos', cantidad:1, precioU:380 ,total:0, validar:false},


        ],
        nuevoLi:'',
        nuevaCan:0,
        nuevoPrecio:0.0,
    subtotal:0,
    busqueda:'',
    max:410,
        
    },
    methods:{
        agregarLibro1(index){
            this.libros[index].validar = !this.libros[index].validar;

        },
        montoLibro:function(i){
            this.libros[i].total=this.libros[i].cantidad*this.libros[i].precioU;
            return this.libros[i].total;
        },
        agregarLibro(index){
            this.libros[index].validar2 = !this.libros[index].validar2;
        }


    },
    computed:{
        CalculoSubtotal(){
            this.subtotal=0;
            for (libro of this.libros){
                this.subtotal+= libro.total;

            }return this.subtotal;
        },
        CalculoIVA(){
            
            this.iva=this.subtotal*0.16;
            return this.iva.toFixed(2);
            
        },
         CalculoTotal(){
            return(this.subtotal+this.iva).toFixed(2);
            
        }, 
        buscarLibro(){
            return this.libros.filter((libro)=> libro.nombre.includes(this.busqueda));
        },
        coincidencia(){
            return this.buscarLibro.length;
        },
        PrecioMax(){
          

          return this.libros.filter((libro)=>libro.precioU <= this.max);
            },

    

    }

});