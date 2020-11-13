<template>
  <div class="dialog">
    <div class="dialog-title">
      <slot v-slot:title />
    </div>
    <div class="dialog-content">
      <slot v-slot:content />
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style></style>
