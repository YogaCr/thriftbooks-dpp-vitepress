<template>
<!-- Created By Yoga Cahya Romadhon -->
  <Header title="Thriftbooks"
          :img-path="imgPath"></Header>
  <div class="max-w-screen-xl mx-auto px-10">
    <Content/>
  </div>
  <Footer/>
</template>

<script>
import Header from "../components/Header.vue";
import Modal from "../components/Modal.vue";
import Footer from "../components/Footer.vue";
import headerImg from '../../assets/header_img.png'

export default {
  components: {Footer, Header, Modal},
  data() {
    return {
      imgPath: headerImg
    }
  }
};
</script>
