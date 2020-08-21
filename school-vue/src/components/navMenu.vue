<template>
	<div id="navMenu">
		<el-menu
			mode="horizontal"
			router
			@select="handleSelect"
			background-color="#BE392A"
			text-color="#fff"
			active-text-color="#ffd04b"
			style="display: flex;justify-content: center;"
		>
			<el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{item.navItem}}</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'NavMenu',
	data() {
		return {
			navList: [
				{ name: '/home', navItem: '首页' },
				{ name: '/pub/abstract', navItem: '学校介绍' },
				{ name: '/pub/down', navItem: '校务公开' },
				{ name: '/pub/teacher', navItem: '名师风采' },
				{ name: '/pub/news/list', navItem: '教学科研' },
				{ name: '/pub/grade', navItem: '年级管理' },
				{ name: '/pub/student', navItem: '学子园地' },
				{ name: '/pub/aboutus', navItem: '招生宣传' }
			],
			cid: ''
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			this.cid = key
		}
	}
}
</script>

<style>
.el-menu--horizontal > .el-menu-item.is-active {
	border-bottom: 4px solid #ffa500;
}
.el-menu-item {
	padding: 0 33px;
}
</style>