<!-- Define what your component should look like here-->
<!-- We can user styles defined in App.vue-->
<!-- We can vbind inline styles-->
<!-- We can listen for events using @event-->
<template>
  <button @click="whenClicked()" class="btn" v-bind:style="{ background: color }">{{ text }}</button>
</template>

<!-- Export your component and define what props it will take-->
<!-- Define the method to run when an event triggers-->
<!-- We can reference props with the this keyword-->
<script>
export default {
  name: "CustomButton",
  props: {
    text: String,
    color: String
  },
  methods: {
    whenClicked() {
      console.log(this.text + ' clicked!');
    }
  }
}
</script>

<!-- Style your component-->
<style scoped>

</style>