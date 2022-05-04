<template>
  <div>
    <div>
      <div
          id="navbar"
          class="w-full fixed z-40"
          :class="[this.isScrolled?'text-black':'text-white']"
          :style="[this.isScrolled?{'background-color':'rgb(255,255,255)'}:{'background-color':'rgb(247,132,43)'}]"
      >
        <div
            class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          <div class="flex flex-row items-center justify-between p-4">
            <a
                :class="[this.isScrolled?'text-black':'text-white']"
                href="/"
                class="text-lg font-semibold tracking-widest uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >THRIFTBOOKS</a
            >
            <button
                class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                v-on:click="toggleNavbar"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path
                    v-if="!this.showMenu"
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                ></path>
                <path
                    v-if="this.showMenu"
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <nav
              :class="{ flex: this.showMenu, hidden: !this.showMenu }"
              class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
          >
            <a
                class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#about" v-on:click.prevent="scroll('#about')"
            >Tentang</a
            >
            <a
                class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#features" v-on:click.prevent="scroll('#features')"
            >Fitur</a
            >
            <a
                class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#process" v-on:click.prevent="scroll('#process')"
            >Proses</a
            >
            <a
                class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#members" v-on:click.prevent="scroll('#members')"
            >Anggota</a
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      this.isScrolled = (window.scrollY > 0);
    },
    scroll(dest) {
      console.log(dest);
      const target = document.querySelector(dest);
      const targetTop =
          window.scrollY + target.getBoundingClientRect().top
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },

  beforeDestroy() {
    // I switched the example from `destroyed` to `beforeDestroy`
    // to exercise your mind a bit. This lifecycle method works too.
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  }
}
</script>

<style scoped>
#navbar {
  transition: all 0.3s ease-in-out;
}
</style>
