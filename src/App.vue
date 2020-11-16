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
    @click="changeDialogStatus"
  >
    打开弹窗
  </Button>
  <Dialog
    :visible="dialogVisible"
  >
    <template v-slot:title>
      <span>
        提示
      </span>
    </template>
    <template v-slot:content>
      <span>
        内容
      </span>
    </template>
    <template v-slot:footer>
      <Button @click="changeDialogStatus">
        取消
      </Button>
    </template>
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
    let dialogVisible = ref(false)
    const addCount = () => {
      count.value++
    }
    provide('count', count)
    provide('addCount', addCount)
    const buttonClick = () => {
      console.log('buttonClick')
    }
    const changeDialogStatus = () => {
      dialogVisible.value = !dialogVisible.value
    }
    return {
      count,
      addCount,
      inputValue,
      buttonClick,
      dialogVisible,
      changeDialogStatus
    }
  }
}
</script>
