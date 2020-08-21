<template>
	<el-menu class="categories" default-active="0" @select="handleSelect" active-text-color="red">
		<el-menu-item index="1">
			<i class="el-icon-menu"></i>
			<span slot="title">教学活动</span>
		</el-menu-item>
		<el-menu-item index="2">
			<i class="el-icon-menu"></i>
			<span slot="title">教学管理</span>
		</el-menu-item>
		<el-menu-item index="3">
			<i class="el-icon-menu"></i>
			<span slot="title">语文科组</span>
		</el-menu-item>
		<el-menu-item index="4">
			<i class="el-icon-menu"></i>
			<span slot="title">英语科组</span>
		</el-menu-item>
		<el-menu-item index="5">
			<i class="el-icon-menu"></i>
			<span slot="title">数学科组</span>
		</el-menu-item>
		<el-menu-item index="6">
			<i class="el-icon-menu"></i>
			<span slot="title">政史地科组</span>
		</el-menu-item>
		<el-menu-item index="7">
			<i class="el-icon-menu"></i>
			<span slot="title">物化生科组</span>
		</el-menu-item>
		<el-menu-item index="8">
			<i class="el-icon-menu"></i>
			<span slot="title">体育科组</span>
		</el-menu-item>
		<el-menu-item index="9">
			<i class="el-icon-menu"></i>
			<span slot="title">科学科组</span>
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
