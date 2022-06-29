<template>
<div>
    <h1> {{ title }}</h1>
    <new_app></new_app>
</div>
</template>



<script>
import new_app from './NewApp.vue'

export default {
  components:{
    'new_app':new_app
  },
  data () {
    return {
      title: 'VueJS-Application'
    }
  }
}
</script>

<style scoped>
h1{
  color: cyan;
}
</style>