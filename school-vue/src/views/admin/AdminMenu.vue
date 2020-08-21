<template>
	<el-menu router :default-active="$route.path" class="el-menu-admin" theme="dark">
		<div style="height: 80px;"></div>
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>用户信息</span>
			</template>
			<el-menu-item index="/admin/user/UserProfile">账号信息</el-menu-item>
		</el-submenu>
		<el-submenu index="2">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>文章管理</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/admin/content/management">文章管理</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>

<script>
export default {
	name: 'AdminMenu',
	data() {
		return {
			isCollapse: false,
			adminMenus: []
		}
	},
	computed: {
		adminMenus() {
			return this.$store.state.adminMenus
		},
		currentPath() {
			return this.$route.path
		}
	}
}
</script>

<style scoped>
.el-menu-admin {
	border-radius: 5px;
	height: 100%;
}
</style>
