<template>
	<div id="register">
		<div class="reg_container">
			<el-form ref="form" :model="form" label-width="60px">
				<h1>用户登录</h1>
				<el-form-item label="用户名">
					<el-input v-model="form.username" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
				</el-form-item>

				<el-form-item>
					<button @click="onSubmit">立即登录</button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
// import {Login} from '@/api/login';
export default {
	data() {
		return {
			form: {
				username: '',
				password: ''
			}
		}
	},
	methods: {
		onSubmit() {
			this.$axios
				.post('/login', {
					username: this.form.username,
					password: this.form.password
				})
				.then(successResponse => {
					if (successResponse.data.code === 200) {
						this.$router.replace({ path: '/admin' })
					} else {
						this.$message({
							type: 'info',
							message: '账号异常'
						})
					}
				})
				.catch(failResponse => {})
		}
	}
}
</script>

<style lang="scss" scoped>
#register {
	width: 100%;
	height: 100vh;
	background: url('../../assets/images/login/login.jpg') no-repeat;
	background-size: cover;
}
.reg_container {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
}
.el-form {
	width: 380px;
	height: 280px;
	margin-top: 100px;
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
	padding: 50px;
	background: #fff;
	h1 {
		text-align: center;
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 30px;
	}
	.linkto {
		display: flex;
		margin-left: 60px;
		justify-content: space-between;
		cursor: pointer;
		a {
			color: #000;
		}
	}
}
button {
	width: 100%;
	padding: 10px;
	margin-top: 30px;
	cursor: pointer;
	background: #ff6a00;
	border: none;
	font-size: 16px;
}
</style>