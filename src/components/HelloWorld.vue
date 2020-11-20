<template>
  <h1>{{ msg }}</h1>
  <button @click="addCount">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
import { inject } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const count:number = inject('count')
    const addCount = inject('addCount')
    return {
      count,
      addCount
    }
  }
}
</script>
