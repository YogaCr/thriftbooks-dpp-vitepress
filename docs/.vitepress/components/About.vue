<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4" :id="this.idElement">
    <div class="flex items-center justify-center">
      <img class="object-scale-down h-90 w-96" :src="this.imgPath" alt="Logo">
    </div>
    <div class="flex flex-col justify-center">
      <h1 class="text-3xl font-bold">
        {{this.title}}
      </h1>
      <h4 class="mt-4 text-md md:text-lg font-normal whitespace-pre-wrap">
        {{this.subtitle}}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props:["imgPath","title","subtitle", "idElement"]
}
</script>
