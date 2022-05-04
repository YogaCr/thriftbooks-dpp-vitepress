<template>
  <div class="relative" :id="this.idElement">
    <center class="absolute w-full -z-50">
      <div class="loading hidden md:flex">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </center>
    <div class="grid grid-rows-4 md:grid-rows-2 grid-cols-1 md:grid-cols-3 mt-8 grid-flow-col gap-4">
      <div class="col-span-1">
        <h3 class="md:text-right mt-8 text-xl font-extrabold">Rekomendasi Buku</h3>
        <h6 class="md:text-right text-gray-500 text-md">Bingung mencari buku? Komunitas pengguna kami akan memberikan
          rekomendasi buku untuk anda.</h6>
      </div>
      <div class="hidden md:block row-span-2 col-span-1 flex items-center justify-center"><img
          class="object-scale-down"
          src="../../assets/prototype.png"
          alt="Contoh Prototype"/></div>
      <div class="col-span-1">
        <h3 class="mt-8 text-xl font-extrabold">Jual Beli Buku</h3>
        <h6 class="text-gray-500 text-md">Jual buku anda apabila sudah tidak digunakan. Selain itu anda juga dapat
          membeli buku di sini.</h6>
      </div>
      <div>
        <h3 class="mt-8 text-xl font-extrabold">Sewa Buku</h3>
        <h6 class="text-gray-500 text-md">Tidak ingin membeli buku tetapi tetap ingin membaca buku tersebut? Anda bisa
          menyewanya dengan durasi waktu tertentu.</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feature",
  props:["idElement"]
}
</script>

<style scoped>
.loading {
  position: relative;
  width: 50vw;
  height: 50vw;
  align-items: center;
  justify-content: center;
}

.loading span {
  position: absolute;
  animation: animate 5s linear infinite;
  border-radius: 50%;
}

.loading span:nth-child(1) {
  animation-delay: 0.0s;
}

.loading span:nth-child(2) {
  animation-delay: 1s;
}

.loading span:nth-child(3) {
  animation-delay: 2s;
}

.loading span:nth-child(4) {
  animation-delay: 3s;
}

.loading span:nth-child(5) {
  animation-delay: 4s;
}

@keyframes animate {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
    box-shadow: inset 0 0 50px rgba(17, 17, 17, 0.5);
  }
  100% {
    width: 100%;
    height: 100%;
    opacity: 1;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.8);
  }
}

</style>

