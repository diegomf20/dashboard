<template>
    <div>
        <Table2>
            <!-- <template slot="fila"> -->
                <tr slot="fila">
                    <td>Hola1</td>
                    <td>Hola</td>
                    <td>Hola</td>
                    <td>Hola</td>
                    <td>Hola</td>
                </tr>
            <!-- </template>     -->
            <!-- <template slot="fila"> -->
                <tr slot="fila">
                    <td>Hola</td>
                    <td>Hola</td>
                    <td>Hola</td>
                    <td>Hola</td>
                    <td>Hola</td>
                </tr>
            <!-- </template>     -->
        </Table2>
    </div>
</template>
<script>

import Tr from '../components/dg-table-tr.vue'
import Table2 from '../components/dg-table.vue'

export default {
    components:{
        'Table2': Table2,
        'Tr': Tr
    }
}
</script>