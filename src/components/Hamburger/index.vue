<template>
	<div style="padding: 0 15px;" @click="toggleClick">
		<i class="el-icon-s-fold hamburger" v-if="isActive"></i>
		<i class="el-icon-s-unfold hamburger" v-else></i>
	</div>
</template>

<script>
export default {
	name: 'Hamburger',
	props: {
		isActive: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		toggleClick() {
			this.$emit('toggleClick');
		}
	}
};
</script>

<style scoped>
.hamburger {
	font-size: 24px;
}
</style>
