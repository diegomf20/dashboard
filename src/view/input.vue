<template>
    <div class="dashboard">
        <div class="sidebar" :class="{'open':(abrir)}">
            <div class="sidebar-header">
                <a class="sidebar-close" @click="close()">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </a>
                <h3 class="text-center my-3">SISTEMAS</h3>
            </div>
            <div class="sidebar-body">
                <ul>
                    <li class="active">
                        <a href=""><i class="fa fa-home" aria-hidden="true"></i>Home</a>
                    </li> 
                    <li>
                        <a href=""><i class="fa fa-calendar-o" aria-hidden="true"></i>Agenda</a>
                    </li> 
                    <li>
                        <a href=""><i class="fa fa-calendar-o" aria-hidden="true"></i>Agenda</a>
                    </li> 
                    <li>
                        <a href=""><i class="fa fa-calendar-o" aria-hidden="true"></i>Agenda</a>
                    </li> 
                    <li>
                        <a href=""><i class="fa fa-calendar-o" aria-hidden="true"></i>Agenda</a>
                    </li> 
                    <li>
                        <a href=""><i class="fa fa-calendar-o" aria-hidden="true"></i>Agenda</a>
                    </li> 
                    <li>
                        <a href=""><i class="fa fa-calendar-o" aria-hidden="true"></i>Agenda</a>
                    </li> 
                    <li>
                        <a href=""><i class="fa fa-calendar-o" aria-hidden="true"></i>Agenda</a>
                    </li> 
                </ul>
            </div>
        </div>
        <div class="show-sidebar" :class="{'open':(abrir)}" @click="close()">

        </div>
        <div class="content">
            <div class="navbar">
                <div class="navbar-content">
                    <i class="fa fa-bell" aria-hidden="true"></i> DIEGO FRANCISCO MENDOZA FRIAS <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <button class="navbar-open" @click="open()">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
            </div>
            <div class="card my-3">
                <div class="card-header">
                    <div class="card-title">Lista de Compras</div>
                </div>
                <div class="table-responsive-general">
                    <table id="hola" v-resize="changeTable" class="table table-card table-striped">
                    </table>
                </div>
                <Table2 id="hola2">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Item</th>
                            <th>Item</th>
                            <th>Opción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Producto 01</td>
                            <td>Producto 01</td>
                            <td>
                                <button class="btn-link-primary">
                                    <i class="fa fa-pencil"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Producto 02</td>
                            <td>Producto 02</td>
                            <td>
                                <button class="btn-link-primary">
                                    <i class="fa fa-pencil"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table2>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <a href="" class="btn btn-success">
                                .btn .btn-success
                            </a>
                            <a href="" class="btn btn-primary">
                                .btn .btn-primary
                            </a>
                            <a href="" class="btn btn-info">
                                .btn .btn-info
                            </a>
                        </div>
                        <div class="col-sm-6">
                            <input type="text" class="form-control input-primary" value="S/ 100.00">
                        </div>
                    </div>
                </div>
            </div>
            <div id="md" class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        Modal title
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Input from '../components/dg-input.vue'
import Text2 from '../components/dg-text.vue'
import Table2 from '../components/dg-table.vue'
// import FullCalendar from '@fullcalendar/vue'
// import dayGridPlugin from '@fullcalendar/daygrid'
import resize from 'vue-resize-directive'

export default {
    directives: {
        resize,
    },
    data() {
        return {
            abrir: false,
            prueba:{
            	nombre: '',
            	descripcion:''
            },
            nombre:'',
            textoo: null,
            dataFullCalendar:[{
                title:"Repeticion evento",
                start: '09-06',
                end: '09-06',        
            }],
            // calendarPlugins: [ dayGridPlugin],
            recordatorio:{
                tipo:"Agenda",
                descripcion: '',
                dia: 1,
            },
            db:null,
            // changeTable:null
        }
    },
    mounted() {
        // swal('hola','','success');
        // setTimeout(function(){
        //     $('#md').modal();
        // },1000);
        var style=document.createElement("style");
        style.setAttribute("id",'dis-responsive');
        document.body.appendChild(style);
    },
    components:{
        Input, 
        Text2,
        Table2
        // FullCalendar
    },
    methods: {
        changeTable(e){
            var panelIzquierda=document.getElementById("hola");
            var panelPadre=document.getElementById("hola").parentNode;
            var widthPadre=panelPadre.clientWidth;
            var widthTable=panelIzquierda.clientWidth;
            
            if (widthPadre<widthTable) {
                var style=document.getElementById('dis-responsive');
                style.innerHTML="#hola thead tr th:nth-child(n){background-color: rgba(0,0,0,.4)}";
            }               
        },
    	open(){
    		this.abrir=true;
    	},
    	close(){
    		this.abrir=false;
    	},
        limpiar(){
            this.nombre=null;
        },
        guardar(){
            var t=this;
            this.db.collection(this.recordatorio.tipo).add(this.recordatorio)
            .then(function(docRef) {
                t.recordatorio={
                    tipo:"Agenda",
                    descripcion: '',
                    dia: 1,
                };
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        },
        hi(a){
            console.log(a);
            
            this.dataFullCalendar=[];
            this.db.collection("Mensual")
            .get().then((query) => {
                query.forEach((doc) => {
                    var data=doc.data();
                    this.dataFullCalendar.push({
                        title:data.descripcion,
                        start: moment(data.dia,'DD').format('YYYY-MM-DD'),
                        end: moment(data.dia,'DD').format('YYYY-MM-DD'), 
                    });
                    
                    // console.log('${doc.id} => ${doc.data()}');
                });
            });
        }
    },
}
</script>