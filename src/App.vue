<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Test v-model:input-value="inputValue"/>
  <div>inputValue: {{inputValue}}</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import {ref, provide} from "vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  },
  setup(key) {
    let count = ref(0)
    let inputValue = ref('aaa')
    const addCount = () => {
      count.value++
    }
    provide('count', count)
    provide('addCount', addCount)
    return {
      count,
      addCount,
      inputValue
    }
  }
}
</script>
