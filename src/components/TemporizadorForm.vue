<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroForm :tempoEmSegundos="tempoEmSegundos"></CronometroForm>
    <BotaoIconText
      @clicado="iniciar"
      icone="fas fa-play"
      texto="Play"
      :desabilitado="cronometroRodando"
    ></BotaoIconText>
    <BotaoIconText
      @clicado="finalizar"
      icone="fas fa-stop"
      texto="Stop"
      :desabilitado="!cronometroRodando"
    ></BotaoIconText>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroForm from './CronometroForm.vue';
import BotaoIconText from './BotaoIconText.vue';
export default defineComponent({
    name: 'TemporizadorForm',
    emits:['aoTemporizadorFinalizado'],
    components:{
        CronometroForm,
        BotaoIconText
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000)
        },
        
        finalizar() {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
})
</script>