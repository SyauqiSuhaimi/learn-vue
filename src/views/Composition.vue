<template>
  <p>My name is {{name}}, I am {{age}} years old</p>
  <!-- <button @click="handleClick">Click Me</button> -->
  <input type="text" v-model="name">
  <button @click="age++">Age++</button>
  <button @click="age--">Age--</button>

  <p>My Username is {{user.name}}, I am {{user.age}} years old</p>
  <input type="text" v-model="user.name">
  <button @click="user.age++">Age++</button>
  <button @click="user.age--">Age--</button>

  <p>My Name is {{user2.name}}, I am {{user2.age}} years old</p>
  <input type="text" v-model="user2.name">
  <button @click="user2.age++">Age++</button>
  <button @click="user2.age--">Age--</button>
  <button @click="handleClick2">Name to Albob</button>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  setup(){
    console.log('setup')

    const name = ref('mario')
    const age = ref(20)

    const user = ref({name: 'Ahmad', age: 30})

    const handleClick = () => {
      name.value = 'luigi'
    }

    const user2 = reactive({name: 'Albab', age: 24})

    const handleClick2 = () => {
      user2.name = 'Albob'
    }

    return{name, age, user, handleClick, user2, handleClick2}
  }

}
</script>

<style>

</style>