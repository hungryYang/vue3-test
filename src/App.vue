<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Test v-model:input-value="inputValue"/>
  <div>inputValue: {{inputValue}}</div>
  <Button
    @click="buttonClick"
    disabled
    size="large"
  >
    我是大个按钮
  </Button>
  <Button
    @click="buttonClick"
    disabled
  >
    我是个按钮
  </Button>
  <Dialog>
    <div v-slot="title">
      1111
    </div>
  </Dialog>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Dialog from './components/Dialog.vue'

import Test from './components/Test.vue'
import {ref, provide} from "vue";
import Button from './components/Button.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
    Button,
    Dialog
  },
  setup(key) {
    let count = ref(0)
    let inputValue = ref('aaa')
    const addCount = () => {
      count.value++
    }
    provide('count', count)
    provide('addCount', addCount)
    const buttonClick = () => {
      console.log('buttonClick')
    }
    return {
      count,
      addCount,
      inputValue,
      buttonClick
    }
  }
}
</script>
