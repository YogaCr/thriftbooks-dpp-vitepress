<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
    <div v-for="member in datas" class="flex flex-col items-center justify-center">
      <img
          class="object-scale-down rounded-full"
          :src="member.imgPath"
          :alt="member.name"/>
      <h3 class="mt-4 text-2xl text-center font-extrabold">{{member.name}}</h3>
      <h5 class="text-gray-500 text-center text-lg">{{member.subtitle}}</h5>
    </div>

  </div>
</template>

<script>
export default {
  name: "Member",
  props:{
    datas:{
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
