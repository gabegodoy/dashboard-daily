<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral></BarraLateral>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioLateral @aoSalvarTarefa="salvarTarefa"></FormularioLateral>
      <div class="lista">
        <TarefaCriada
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        ></TarefaCriada>
        <BoxForm v-if="listaTaVazia"> {{ motivationalQuote }} </BoxForm>
      </div>
    </div>
  </main>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormularioLateral from "./components/FormularioLateral.vue";
import TarefaCriada from "./components/TarefaCriada.vue";
import ITarefa from "./interfaces/ITarefa";
import BoxForm from "./components/BoxForm.vue";
import getMotivationalQuote from "./services/motivational-quote-service"
import getClimatempoTemperature from "./services/climatempo-api"

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioLateral,
    TarefaCriada,
    BoxForm,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      motivationalQuote: this.workCaralho(),
      getClimatempoTemperature: getClimatempoTemperature(),
    };
  },
  computed: {
    listaTaVazia () : boolean{
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    workCaralho() : void {
      getMotivationalQuote().then(result => this.motivationalQuote = result)
    }
  },
});
</script>




<style>
.lista {
  padding: 1.25rem;
}

main{
  --bg-primario: #FFF;
  --texto-primario: #000;
}
  main.modo-escuro{
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo{
  background: var(--bg-primario);
}
</style>

