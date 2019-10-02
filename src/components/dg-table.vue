<template>
    <div class="vue-table">
        <table>
            <thead>
                Hola mundo
            </thead>
            <tbody>
                <slot name="fila">
                </slot>
                <slot name="fila"></slot>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'Table2'
}
</script>