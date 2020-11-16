<template>
  <teleport to="body">
    <div class="dialog" v-if="visible">
      <div class="dialog-title">
        <slot name="title"/>
      </div>
      <div class="dialog-content">
        <slot name="content"/>
      </div>
      <div class="dialog-footer">
        <slot name="footer" />
      </div>
    </div>
  </teleport>
</template>
<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss">
.dialog {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #2c3e50;
  background: #fff;
  width: 30%;
  &-title {
    padding: 5px 10px;
    border-bottom: 1px solid #2c3e50;
  }
  &-content {
    padding: 10px 20px;
    border-bottom: 1px solid #2c3e50;
  }
  &-footer {
    padding: 5px 10px;
    float: right;
  }
}
</style>
