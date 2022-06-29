<template>
  <!-- <add-blog></add-blog> -->
  <show-blogs></show-blogs>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlogs";
export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
  },
};
</script>
<style>
</style>
