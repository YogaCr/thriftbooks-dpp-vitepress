<template>
  <Navbar></Navbar>
  <!--  Header-->
  <div>
    <div style="background: rgb(247 132 43)">
      <div class="max-w-screen-xl mx-auto px-10 pt-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="flex flex-col justify-center order-last md:order-first">
            <h1 class="text-3xl md:text-5xl font-bold text-white">
              Thriftbooks
            </h1>
            <h4 class="mt-4 text-md md:text-lg font-normal text-white">Thriftbooks memudahkan dalam menjual, membeli, menyewa buku
              dalam satu daerah yang sama, serta meminta rekomendasi buku.
            </h4>
          </div>
          <div class="col-span-2 flex items-center justify-center">
            <img class="object-scale-down h-9/12 w-9/12" src="../../assets/header_img.png" alt="Thriftbooks Header"></div>
        </div>
      </div>
    </div>

    <HeaderWave></HeaderWave>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import HeaderWave from "./customs/HeaderWave.vue";

export default {
  name: "Header",
  components: {HeaderWave, Navbar},
}
</script>

<style scoped>

</style>
