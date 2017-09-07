<template>
  <div id="app">
  	<div class="loading" v-show="loading"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  data() {
  	return {
  	}
  },
  computed: {
  	 ...mapGetters(['loading']),
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.loading {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 2000;
	background-color: rgba(0,0,0,0.1);
	background-image: url(assets/loading.gif);
	background-repeat: no-repeat;
	background-size: 32px 32px;
	background-position: center center;
}
</style>
