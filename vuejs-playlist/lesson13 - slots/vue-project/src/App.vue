<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h1>This is form header</h1>
        <p>Please fill out the information:</p>
      </div>
      <div slot="form-fields">
        <label for="username">Username: </label>
        <input type="text" id="username" placeholder="username" required />
        <label for="password">Password: </label>
        <input type="password" id="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button type="submit">Submit</button>
      </div>
      <div slot="form-links">
        <a href="#">Link1</a>
        <a href="#">Link2</a>
        <a href="#">Link3</a>
        <a href="#">Link4</a>
      </div>
    </form-helper>
  </div>
</template>

<script>
import FormHelper from "./components/FormHelper";
export default {
  components: {
    "form-helper": FormHelper,
  },
};
</script>
  
<style>
h1 {
  color: red;
}
h2 {
  color: blue;
}
</style>
