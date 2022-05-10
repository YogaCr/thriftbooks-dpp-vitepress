<template>
  <Navbar></Navbar>
  <div class="min-h-screen flex flex-col justify-center">
    <BgParticle></BgParticle>
    <div class="max-w-screen-xl mx-auto px-10 pt-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 animate">
        <div class="flex flex-col justify-center order-last md:order-first">
          <h1 class="text-3xl md:text-5xl font-bold">
            <VueWriter :array="['Jual beli','Sewa menyewa', 'Minta rekomendasi']" :typeSpeed="50" :eraseSpeed="50"/>
            buku lebih mudah
          </h1>
          <h4 class="mt-4 text-md md:text-xl italic font-normal">
            - {{ title }}
          </h4>
          <a href="#about" role="button"
             class="text-center w-auto rounded-full border-4 text-black border-black py-2 px-8 font-bold text-white mt-4 text-xl transition-all duration-300">
            Selengkapnya
          </a>
        </div>
        <div class="col-span-2 flex items-center justify-center">
          <img class="object-scale-down h-9/12 w-9/12" :src="imgPath" :alt="title">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import HeaderWave from "./customs/HeaderWave.vue";
import VueWriter from 'vue-writer';
import BgParticle from "./customs/BgParticle.vue";

export default {
  name: "Header",
  components: {HeaderWave, Navbar, VueWriter, BgParticle},
  props: {
    title: {type: String},
    imgPath: {type: String}
  },

}
</script>

<style scoped>
.animate {
  animation: fadeInAnimation ease-out 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    margin-top: 1%;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}

</style>
