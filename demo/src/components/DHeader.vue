<template>
  <header>{{num2}}</header>
  <input type="text" v-model="num">
</template>

<script>
import getNum from './num'
import change from './change'

export default {
  props: {
    title: {
      type: Number
    }
  },
  setup (props) {
    const { title } = props
    const { num } = getNum()
    const { num2 } = change(title)
    return {
      num,
      num2
    }
  }
}
</script>

<style>

</style>