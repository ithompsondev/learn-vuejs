<!-- Define template HTML here-->
<!-- Display other components here-->
<template>
  <header>
    <h1>{{ heading }}</h1>
    <CustomButton text="Heading Button" color="green"/>
  </header>
</template>

<!-- Register component here for use in application-->
<!-- Import other components to render here-->
<script>
import CustomButton from "@/components/CustomButton";

export default {
  name: "CustomHeader",
  props: {
    heading: String
  },
  components: {
    CustomButton
  }
}
</script>

<!-- Scoped styles only apply to this component-->
<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>