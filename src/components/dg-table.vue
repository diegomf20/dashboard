<template>
    <div class="table-responsive-general">
        <table v-resize:debounce.200="redimensionar" :id="id" class="table table-card table-striped">
            <slot></slot>
        </table>
    </div>
</template>
<script>
import resize from 'vue-resize-directive'
export default {
    name: 'Table2',
    props:['id'],
    directives: {resize},
    data() {
        return {
            ancho: 0,
            oculto: 0,
            cuando: []
        }
    },
    mounted() {
        var style=document.createElement("style");
        style.setAttribute("id",this.id+'-style');
        document.body.appendChild(style);
    },
    methods: {
        redimensionar(){
            var panelIzquierda=document.getElementById(this.id);
            var panelPadre=document.getElementById(this.id).parentNode;
            var widthPadre=panelPadre.clientWidth;
            var widthTable=panelIzquierda.clientWidth;
            console.log(widthPadre,widthTable);

            var style=document.getElementById(this.id+'-style');
            if (widthTable>this.ancho) {
                if (widthPadre>this.cuando[this.cuando.length-1]) {
                    var css=''
                    this.oculto--;
                    var count=document.getElementById(this.id).rows[0].cells.length;
                    for (let i = 0; i < this.oculto; i++) {
                        css+=" #"+this.id+" thead tr th:nth-child("+(count-i)+"){display:none}#"+this.id+" tbody tr td:nth-child("+(count-i)+"){display:none}#"+this.id+" tbody tr.open td:nth-child("+(count-i)+"){display:block}";
                    }
                    style.innerHTML=css;
                    this.cuando.splice(this.cuando.length-1,1);
                }
            }
            if(widthPadre<widthTable){
                // if (widthPadre<widthTable) {
                    var count=document.getElementById(this.id).rows[0].cells.length;
                    this.oculto++;
                    this.cuando.push(widthPadre);
                    var css=''
                    for (let i = 0; i < (this.oculto); i++) {
                        
                        css+=" #"+this.id+" thead tr th:nth-child("+(count-i)+"){display:none}#"+this.id+" tbody tr td:nth-child("+(count-i)+"){display:none}#"+this.id+" tbody tr.open td:nth-child("+(count-i)+"){display:block}";
                    }
                    style.innerHTML=css;

                // }               

            }
            console.log(widthPadre,widthTable);
            // console.log(this.ancho,widthTable);
            
            this.ancho=widthTable;

            
        },
    }
}
</script>