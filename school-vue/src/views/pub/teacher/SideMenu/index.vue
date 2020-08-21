<template>
	<el-menu class="categories" default-active="0" @select="handleSelect" active-text-color="red">
		<el-menu-item index="11">
			<i class="el-icon-menu"></i>
			<span slot="title">名师建设</span>
		</el-menu-item>
		<el-menu-item index="19">
			<i class="el-icon-menu"></i>
			<span slot="title">月度教师</span>
		</el-menu-item>

		<el-menu-item index="20">
			<i class="el-icon-menu"></i>
			<span slot="title">校长讲话集</span>
		</el-menu-item>
		<el-menu-item index="21">
			<i class="el-icon-menu"></i>
			<span slot="title">教师国旗下讲话集</span>
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
