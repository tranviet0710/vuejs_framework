<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-show="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <label>Blog Categories:</label>
      <div id="checkboxes">
        <label for="">manga</label>
        <input type="checkbox" value="manga" v-model="blog.categories" />
        <label for="">anime</label>
        <input type="checkbox" value="anime" v-model="blog.categories" />
        <label for="">cartoon</label>
        <input type="checkbox" value="cartoon" v-model="blog.categories" />
        <label for="">hentai</label>
        <input type="checkbox" value="hentai" v-model="blog.categories" />
      </div>
      <label>Authors: </label>
      <div id="selectboxes">
        <select v-model="blog.author">
          <option v-bind:key="author" v-for="author in authors">
            {{ author }}
          </option>
        </select>
      </div>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your blog!</h3>
    </div>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{ blog.content }}</p>
      <p>Blog categories:</p>
      <p>{{ blog.categories }}</p>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["Viet", "Pho", "Bao", "Thien"],
      submitted: false,
    };
  },
  methods: {
    post: function () {
      this.$http
        .post("http://jsonplaceholder.typicode.com/posts", {
          user_id: 1,
          title: this.blog.title,
          content: this.blog.content,
          category: this.blog.categories,
          author: this.blog.author,
        })
        .then(function (result) {
          console.log(result);
          this.submitted = true;
        });
    },
  },
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
#selectboxes select option {
  font-size: 12px;
}
button {
  font-size: 12px;
}
</style>
