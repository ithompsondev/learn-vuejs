<!-- Use v-for to loop, pythonic syntax-->
<!-- Explicitly specify the key-->
<template>
  <div v-for="task in tasks" v-bind:key="task">
    <b>ID: </b>{{task.id}}<br>
    <b>Name: </b>{{task.name}}<br>
  </div>
</template>

<script>
export default {
  name: "CustomTasks",
  props: {
    tasks: Array
  }
}
</script>

<style scoped>

</style>