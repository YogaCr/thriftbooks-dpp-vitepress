<template>
  <h1 :id="idElement" :class="customClass" class="text-center text-5xl uppercase font-extrabold">{{title}}</h1>
  <h4 class="text-center mt-4 text-lg text-gray-500">{{subtitle}}</h4>
</template>

<script>
export default {
  name: "Title",
  props:{
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    customClass: {
      type: String,
      default: '',
    },
    idElement: {
      type: String,
    },

  }
}
</script>

<style scoped>

</style>
