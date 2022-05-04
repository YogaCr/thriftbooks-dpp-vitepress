<template>

  <Header></Header>
  <div class="max-w-screen-xl mx-auto px-10">
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Modal from "../components/Modal.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {Footer, Header, Modal}
};
</script>
