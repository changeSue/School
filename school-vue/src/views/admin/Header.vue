<template>
	<el-card class="admin-header">
		<a href="/index">
			<img
				src="../../assets/images/admin/icon2.png"
				alt
				width="55px"
				style="float: left;margin-top: -5px;"
			/>
		</a>
		<span style="font-size: 32px;font-weight: bold;position:absolute;left: 100px">管 理</span>
		<i class="el-icon-switch-button" v-on:click="logout" style="font-size: 40px;float: right"></i>
	</el-card>
</template>

<script>
export default {
	name: 'Header',
	methods: {
		logout() {
			this.$axios.get('/logout').then(resp => {
				if (resp.data.code === 200) {
					this.$message({
						type: 'info',
						message: '成功登出'
					})
					// 前后端状态保持一致
					this.$store.commit('logout')
					this.$router.replace('/login')
				}
			})
		}
	}
}
</script>

<style scoped>
.admin-header {
	height: 80px;
	opacity: 0.85;
	line-height: 40px;
	min-width: 900px;
}
.el-icon-switch-button {
	cursor: pointer;
	outline: 0;
}
</style>
