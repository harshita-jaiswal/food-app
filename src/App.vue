<template>
	<div id="app">
		<shell />
	</div>
</template>

<script>
import Shell from "./layout/Shell.vue";
import "./assets/styles/_base.scss";

export default {
	name: "app",
	components: {
		Shell
	}
};
</script>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
