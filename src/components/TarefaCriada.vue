 <template>
  <BoxForm>
      <div class="columns">
        <div class="column is-4">{{ tarefa.descricao || 'Und3f!neD'}}</div>
        <div class="column is-3">
          {{ tarefa.projeto?.nome || 'xD' }}
        </div>

        <div class="column">
          <CronometroForm :tempoEmSegundos="tarefa.duracaoEmSegundos" />
        </div>
      </div>
  </BoxForm>
</template>
 <script lang="ts">
import { defineComponent, PropType } from "vue";
import CronometroForm from "./CronometroForm.vue";
import ITarefa from "@/interfaces/ITarefa";
import BoxForm from "./BoxForm.vue";
export default defineComponent({
  name: "TarefaCriada",
  components: { CronometroForm, BoxForm },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
});
</script>