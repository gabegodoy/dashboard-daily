<template>
    <header>
        <h1>
            <img src="https://nexum.com.br/wp-content/themes/nexum/logo-nexum.png" alt="Logo da Alura Tracker">
        </h1>
        <nav class="panel mt-5">
            <ul>
                <li><router-link to="/" class="link"><i class="fas fa-tasks"></i>Tarefas</router-link></li>
                <li><router-link to="/projetos" class="link"><i class="fas fa-project-diagram"></i>Projetos</router-link></li>
            </ul>
        </nav>
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
.panel li{
    margin: 8px 0;
    margin-left: 1rem;
}

li i{
    margin-right: .5rem;
}
.link{
    color: #fff;
}

.link:hover{
    color: #FAF0CA
}

.link.router-link-active{
    color: #FAF0CA;
}
</style>