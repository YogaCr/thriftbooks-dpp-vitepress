<template>
  <div class="order-1 rounded-xl hover:shadow-lg transition-all hover:scale-110 ease-in-out cursor-pointer w-full md:w-5/12 px-6 py-4">
    <img class="object-scale-down h-64 w-96" :src="imgPath" alt="">
    <h3 class="mb-3 text-center font-bold text-xl">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['imgPath', 'title'],
}
</script>

<style scoped>

</style>
