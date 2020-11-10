<template>
  <div>count is {{count}}</div>
  <input type="text" :value="inputValue" @input="change">
</template>
<script>
import { inject, ref } from 'vue'
export default {
  props: {
    inputValue: String
  },
  setup (props, context) {
    const count = inject('count')
    const change = (event) => {
      context.emit('update:inputValue', event.target.value)
    }
    return {
      count,
      change
    }
  }
}
</script>
