<template>
    <header>
        <h1>
            <img src="https://nexum.com.br/wp-content/themes/nexum/logo-nexum.png" alt="Logo da Alura Tracker">
        </h1>
    </header>
</template>

<script lang="ts">
import { DefineComponent, defineComponent } from 'vue';
export default defineComponent({
    name: 'BarraLateral',
})

</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}

h1{
    display: flex;
    justify-items: center;
}

img{
    margin: 0 auto;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5;
        height: auto;
    }
}
</style>