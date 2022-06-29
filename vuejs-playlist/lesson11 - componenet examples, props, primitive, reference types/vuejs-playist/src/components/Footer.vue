<template>
  <footer>
    <p>{{ copyright }}</p>
    <p>{{ name }}</p>
    <div>
      {{ ninjas }}
    </div>
  </footer>
</template>

<script>
import { bus } from '../main';
export default {
  props: {
    copyright: {
      type: String,
    },
    name: {
      type: String,
    },

    ninjas: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  created() {
    bus.$on('changeTitle', (data) => {
      this.name = data;
    })
  }
};
</script>
<style scoped>
footer {
  background: #222;
  padding: 6px;
}

p {
  color: lightgreen;
  text-align: center;
}
</style>
