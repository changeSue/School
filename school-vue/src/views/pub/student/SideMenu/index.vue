<template>
	<el-menu class="categories" default-active="0" @select="handleSelect" active-text-color="red">
		<el-menu-item index="25">
			<i class="el-icon-menu"></i>
			<span slot="title">月度学生</span>
		</el-menu-item>
		<el-menu-item index="26">
			<i class="el-icon-menu"></i>
			<span slot="title">学生演讲集</span>
		</el-menu-item>

		<el-menu-item index="27">
			<i class="el-icon-menu"></i>
			<span slot="title">榜样之路</span>
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
