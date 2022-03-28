<template>
  <div>
    <br><button @click="getPost">Load Post</button>
    <div v-if="posts">
    <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
    </div>
  </div>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
    setup(){
        const posts = ref(null)

        const getPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => posts.value = data)
        .catch(er => console.log(er.message))
        console.log(posts)
        }
      

      return{posts, getPost}
    },

    data(){
        return{
            post2: []

        }
    },

    methods:{
    getPost2(){
      fetch('http://localhost:3000/job')
        .then(res => res.json())
        .then(data => this.post2 = data)
        .catch(er => console.log(er.message))
        console.log(this.post2)
    }
    }

}
</script>

<style>
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  color: #42b983;
}
</style>