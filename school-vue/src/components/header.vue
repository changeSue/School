<template>
	<div id="header">
		<div class="header">
			<div id="logo"></div>
			<div class="header_right">
				<router-link to="/login">
					<el-button>登录</el-button>
				</router-link>
				<!-- <router-link to="/register">
					<el-button>注册</el-button>
				</router-link>-->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {}
	},
	methods: {
		gotoLogin() {}
	}
}
</script>

<style lang="scss">
#header {
	width: 100%;
	height: 90px;
	overflow: hidden;
	padding: 0;
	margin: 0 auto;
	background: rgb(247, 245, 178);
	position: relative;
}
.header {
	width: 1000px;
	margin: 0 auto;
}
#logo {
	width: 450px;
	height: 100px;
	overflow: hidden;
	background: url(../assets/images/index/logo.png) no-repeat left center;
	background-size: 100%;
	background-color: rgb(247, 245, 178);
	float: left;
	position: relative;
}
.header_right {
	width: 275px;
	height: 60px;
	overflow: hidden;
	padding: 30px 0 0 0;
	float: right;
	position: relative;
}
.search_sou {
	width: 44px;
	height: 30px;
	overflow: hidden;
	float: right;
	position: relative;
}
.search_put {
	width: 228px;
	height: 28px;
	overflow: hidden;
	border: 1px solid #5e7c98;
	float: right;
	position: relative;
}
.search_main {
	width: 225px;
	height: 28px;
	line-height: 28px;
	overflow: hidden;
	padding: 0 0 0 3px;
	margin: 0 auto;
	color: #fff;
	background: #33495e;
	border: none;
	position: relative;
}
</style>