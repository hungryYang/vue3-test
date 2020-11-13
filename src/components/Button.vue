<template>
<!--  <div class="div">-->
    <button class="wtf-button" :class="classes">
      <slot />
    </button>
<!--  </div>-->
</template>
<script>
import { computed } from 'vue'
export default {
  /*
  * 默认会把所有属性都绑定再根元素上
  * 可以使用inheritAttrs禁用
  * v-bind="$attrs" 绑定全部属性
  * */
  // inheritAttrs: false,
  props: {
    disabled: Boolean,
    size: String
  },
  /*
  * props 需要声明才能拿到
  * context.attrs可以直接拿到传递的属性, 但是对于disabled这种写法会拿成空字符串
  * */
  setup (props, context) {
    console.log({ ...props })
    console.log({ ...context.attrs })
    const { size, ...ano } = props
    const classes = computed(() => {
      return { [`wtf-button-${size}`]: size  }
    })
    console.log(classes);
    return { classes }
  }
}
</script>
<style lang="scss">
  .div {
    padding: 30px;
    background: antiquewhite;
  }
  .wtf-button {
    font-size: 14px;
    &-large {
      font-size: 24px;
      padding: 4px 6px;
    }
  }
</style>
