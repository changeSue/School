<template>
	<el-menu class="categories" default-active="0" @select="handleSelect" active-text-color="red">
		<el-menu-item index="22">
			<i class="el-icon-menu"></i>
			<span slot="title">初一年级</span>
		</el-menu-item>
		<el-menu-item index="23">
			<i class="el-icon-menu"></i>
			<span slot="title">初二年级</span>
		</el-menu-item>

		<el-menu-item index="24">
			<i class="el-icon-menu"></i>
			<span slot="title">初三年级</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
export default {
	name: 'SideMenu',
	data() {
		return {
			cid: ''
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			this.cid = key
			this.$emit('indexSelect')
		}
	}
}
</script>

<style scoped>
/* .categories {
	position: fixed;
	margin-left: 50%;
	left: -600px;
	top: 150px;
	width: 150px;
} */
</style>
