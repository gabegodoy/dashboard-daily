<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral></BarraLateral>
    </div>
    <div class="column is-three-quarter conteudo">
      <NotificacoesGeral></NotificacoesGeral>
      <!-- ROUTE -->
      <router-view></router-view>
    </div>
  </main>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import NotificacoesGeral from "./components/Notificacoes.vue"

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    NotificacoesGeral
  },
});
</script>