<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link> | 
    <router-link :to="{name:'jobs'}">Jobs</router-link> | 
    <router-link :to="{name:'comp'}">Composition</router-link> | 
    <router-link :to="{name:'post'}">PostList</router-link> | 
    <router-link :to="{name:'create'}">CreatePost</router-link> | 
    <router-link :to="{name:'login'}">Login</router-link>
  </div>
  <div>
    <button @click="redirect">Redirect Home</button>
    <button @click="back">Back</button>
    <button @click="forward">Forward</button>
  </div>
  <router-view/>
</template>

<script>
export default {
  methods:{
    redirect(){
      this.$router.push({name: 'home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: white;
  background: #42b983;
}

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