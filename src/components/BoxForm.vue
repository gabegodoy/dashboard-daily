<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BoxForm",
});
</script>
<style scoped>
.box {
  background: #00c6b9;
  color: white;
}
</style>