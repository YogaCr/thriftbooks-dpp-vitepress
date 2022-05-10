<template>
  <footer class="mt-8">
    <!--    <h6 class="text-center text-gray-500 py-8">{{(new Date()).getFullYear()}} - Thriftbooks</h6>-->
    <FooterWave/>
    <div class="bg-orange py-8 flex flex-col items-center justify-center">
      <h1 class="text-3xl text-white font-bold text-center mt-8">Tertarik Untuk Mencoba?</h1>
      <a href="https://www.figma.com/proto/XNkLok9jSvYKmZWO1N6nPJ/DPP-C7---ThriftBooks" target="_blank" role="button"
          class="rounded-full bg-orange hover:bg-white border-2 border-white py-2 px-8 font-bold text-white mt-4 text-xl hover:text-orange transition-all duration-300">
        Coba Prototipe
      </a>

      <h6 class="text-white mt-8 font-normal text-xs">{{(new Date()).getFullYear()}} Created by Thriftbook Team</h6>
    </div>
  </footer>
</template>

<script>
import FooterWave from "./customs/FooterWave.vue";

export default {
  name: "Footer",
  components: {FooterWave}
}
</script>

<style scoped>

</style>
