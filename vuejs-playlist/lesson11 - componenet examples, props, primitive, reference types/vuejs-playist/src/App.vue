<template>
  <div>
    <app-header v-bind:name="name" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-body v-bind:ninjas="ninjas"></app-body>
    <app-footer
      v-bind:copyright="copyright"
      v-bind:ninjas="ninjas"
      v-bind:name="name"
    ></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Body from "./components/Body.vue";
export default {
  components: {
    "app-header": Header,
    "app-body": Body,
    "app-footer": Footer,
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false },
      ],
      name: "Tran Cong Viet",
      copyright: "Copyright by VietDev @2022",
      is_repeated: true,
    };
  },
  methods: {
    updateTitle: function (new_title) {
      this.name = new_title;
    }
  }
};
</script>

<style scoped>
</style>