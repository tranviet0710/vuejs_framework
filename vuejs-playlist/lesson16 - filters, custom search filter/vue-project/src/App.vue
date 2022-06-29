<template>
  <!-- <add-blog></add-blog> -->
  <div>
    <show-blogs></show-blogs>
    <list-Blogs></list-Blogs>
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlogs";
import listBlogs from "./components/listBlogs";
export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "list-Blogs": listBlogs,
  },
};
</script>
<style>
</style>
