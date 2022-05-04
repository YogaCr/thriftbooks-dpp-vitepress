<template>
  <transition name="modal-fade">
    <div class="modal-backdrop z-50" :class="this.isOpen?'flex':'hidden'">
      <div class="modal shadow-xl rounded-lg p-2 w-8/12"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <header
            class="modal-header"
            id="modalTitle"
        >
          <slot name="header">
            This is the default tile!
          </slot>
          <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section
            class="modal-body"
            id="modalDescription"
        >
          <div v-html="this.bodyModal"></div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    bodyModal: {
      type: String,
      default: '',
    },
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.4);
  background: transparent;
}

.btn-close:hover {
  color: rgba(0, 0, 0, 0.8);
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>
