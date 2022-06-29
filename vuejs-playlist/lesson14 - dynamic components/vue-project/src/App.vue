<template>
  <div>
    <keep-alive>
      <component v-bind:is="form"></component>
    </keep-alive>
    <button @click="form = 'contact-form'">Contact Form</button>
    <button @click="form = 'sign-in-form'">Sign In Form</button>
    <button @click="form = 'sign-up-form'">Sign Up Form</button>
  </div>
</template>

<script>
import ContactForm from "./components/ContactForm.vue";
import SignInForm from "./components/SignInForm.vue";
import SignUpForm from "./components/SignUpForm.vue";
export default {
  components: {
    "contact-form": ContactForm,
    "sign-up-form": SignUpForm,
    "sign-in-form": SignInForm,
  },
  data() {
    return {
      form: "contact-form",
    };
  },
};
</script>

<style>
</style>
