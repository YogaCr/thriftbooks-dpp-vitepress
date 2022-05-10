<template>
  <div class="grid grid-cols-1 pt-8 md:grid-cols-2 gap-4" :id="idElement">
    <div class="flex items-center justify-center">
      <img class="object-scale-down h-90 w-96" :src="imgPath" alt="Logo">
    </div>
    <div class="flex flex-col justify-center">
      <h1 class="text-3xl font-bold">
        {{title}}
      </h1>
      <h4 class="mt-4 text-md md:text-lg font-normal whitespace-pre-wrap">
        {{subtitle}}
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
