<template>
  <div>
    <header>
      <p @click="changeName">{{ name }}</p>
    </header>
  </div>
</template>

<script>
import { bus } from '../main';
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {};
  },
  methods: {
    changeName: function () {
      // this.$emit('changeTitle', "Title was changed!")
      this.name = "Title was changed!";
      bus.$emit('changeTitle', "Title was changed!");
    },
  },
};
</script>

<style scoped>
header {
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}
p {
  text-align: center;
}
</style>