<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs>
    <list-Blogs></list-Blogs> -->
    <heading></heading>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlogs";
import listBlogs from "./components/listBlogs";
import heading from "./components/header";
import detail from "./components/detailBlog";
export default {
  components: {
    heading: heading,
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "list-Blogs": listBlogs,
    detail: detail,
  },
};
</script>
<style>
</style>
