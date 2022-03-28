<template>
  <div class="jobDetails">
      <div v-if="job">
        <h1>{{job.title}}</h1>
        <p>ID is {{id}}</p>
        <h1>{{job.details}}</h1>
      </div>
      <div v-else>
          <p>Job details loading...</p>
      </div>
  </div>
</template>


<script>
export default {
    props:['id'],

    data(){
        return{
           job: null,
        }
    },
    mounted(){
      fetch('http://localhost:3000/job/' + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(er => console.log(er.message))
  }

}
</script>

<style>
.home {
    align-items: center;
    text-align: center;
  }
  
</style>