import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'
import detailBlog from './components/detailBlog.vue'
export default [
    {path : '/', component: showBlogs},
    {path : '/add', component: addBlog},
    {path: '/blog/:id', component: detailBlog}
]