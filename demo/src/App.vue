<template>
  <d-header :title="num"></d-header>
</template>

<script>
import DHeader from './components/DHeader.vue'
export default {
  name: 'App',
  data () {
    return {
      num: 10
    }
  },
  components: {
    DHeader
  }
}
</script>
