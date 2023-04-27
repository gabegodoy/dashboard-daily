<template>
  <FormularioLateral @aoSalvarTarefa="salvarTarefa"></FormularioLateral>
  <div class="lista">
    <TarefaCriada
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
    ></TarefaCriada>
    <BoxForm v-if="listaTaVazia"> {{ motivationalQuote }} </BoxForm>
  </div>
</template>
  
  
  <script lang="ts">
import { defineComponent } from "vue";
import FormularioLateral from "../components/FormularioLateral.vue";
import TarefaCriada from "../components/TarefaCriada.vue";
import ITarefa from "../interfaces/ITarefa";
import BoxForm from "../components/BoxForm.vue";
import getMotivationalQuote from "@/services/motivational-quote-service";

export default defineComponent({
  name: "TarefasHome",
  components: {
    FormularioLateral,
    TarefaCriada,
    BoxForm
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      motivationalQuote: this.getQuote(),
    };
  },
  computed: {
    listaTaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    getQuote(): void {
      getMotivationalQuote().then(
        (result) => (this.motivationalQuote = result)
      );
    },
  },
});
</script>
  
  <style>
.lista {
  padding: 1.25rem;
}
</style>
  
  