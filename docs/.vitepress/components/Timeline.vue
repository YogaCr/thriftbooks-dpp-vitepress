<template>
  <div class="relative wrap overflow-hidden pt-10 md:p-10 h-full" :id="idElement">
    <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden md:block"
         style="left: 50%"></div>

    <div v-for="(data,index) in timelineDatas" :class="[index%2===0?'':'flex-row-reverse']"
         class="mb-8 flex justify-between items-center w-full">
      <div class="order-1 w-5/12 hidden md:flex"></div>
      <div class="z-20 items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:flex">
        <h1 class="mx-auto font-semibold text-lg text-white">{{index+1}}</h1>
      </div>
      <CardTimeline v-on:click="this.openModal(index)" :img-path="data.imgPath" :title="data.title"/>
    </div>
  </div>
  <Modal ref="modal-card" :body-modal="bodyModal">
    <template v-slot:header>
      <b>{{titleModal}}</b>
    </template>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";
import CardTimeline from "./CardTimeline.vue";

export default {
  name: "Timeline",
  components: {CardTimeline, Modal},
  props: {
    timelineDatas: {
      type: Array
    },
    idElement: {
      type: String
    }
  },
  data() {
    return {
      titleModal:'',
      bodyModal: ''
    };
  },
  methods: {
    openModal(index) {
      this.bodyModal = this.timelineDatas[index].modalBody;
      this.titleModal = this.timelineDatas[index].title;
      this.$refs["modal-card"].open();
    }
  }
}
</script>

<style scoped>

</style>
