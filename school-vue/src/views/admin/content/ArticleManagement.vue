<template>
	<div>
		<el-row style="margin: 18px 0px 0px 18px ">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/admin/dashboard' }">管理中心</el-breadcrumb-item>
				<el-breadcrumb-item>内容管理</el-breadcrumb-item>
				<el-breadcrumb-item>文章管理</el-breadcrumb-item>
			</el-breadcrumb>
		</el-row>
		<router-link :to="{path:'editor'}">
			<el-button class="add-link" type="success">写文章</el-button>
		</router-link>
		<el-input style="margin: 18px 20px;width: 300px;" v-model="keywords" placeholder="请输入内容">
			<el-button slot="append" icon="el-icon-search" @click="handleSearch" />
		</el-input>
		<el-form
			:inline="true"
			v-model="form"
			ref="listform"
			style="margin: 18px 200px;width: 600px;float:right"
		>
			<el-form-item label="文章分类查询" prop="cid">
				<el-select v-model="form.category.id" placeholder="请选择分类">
					<el-option label="全部" value="0"></el-option>
					<el-option label="教学活动" value="1"></el-option>
					<el-option label="教学管理" value="2"></el-option>
					<el-option label="语文科组" value="3"></el-option>
					<el-option label="英语科组" value="4"></el-option>
					<el-option label="数学科组" value="5"></el-option>
					<el-option label="政史地科组" value="6"></el-option>
					<el-option label="物化生科组" value="7"></el-option>
					<el-option label="体育科组" value="8"></el-option>
					<el-option label="科学科组" value="9"></el-option>
					<el-option label="学校介绍" value="13"></el-option>
					<el-option label="校园快讯" value="15"></el-option>
					<el-option label="名师建设" value="11"></el-option>
					<el-option label="文件通知" value="17"></el-option>
					<el-option label="校务通知" value="18"></el-option>
					<el-option label="月度教师" value="19"></el-option>
					<el-option label="校长演讲集" value="20"></el-option>
					<el-option label="教师演讲集" value="21"></el-option>
					<el-option label="初一年级" value="22"></el-option>
					<el-option label="初二年级" value="23"></el-option>
					<el-option label="初三年级" value="24"></el-option>
					<el-option label="月度学生" value="25"></el-option>
					<el-option label="学生演讲集" value="26"></el-option>
					<el-option label="榜样之路" value="27"></el-option>
					<el-option label="招生宣传" value="28"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
		</el-form>
		<el-card style="margin: 18px 2%;width: 95%;">
			<el-table :data="articles" stripe style="width: 100%" :max-height="tableHeight">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column type="expand">
					<template slot-scope="props">
						<el-form label-position="left" inline>
							<el-form-item>
								<span>{{ props.row.articleAbstract }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column prop="articleTitle" label="题目（展开查看摘要）" fit></el-table-column>
				<el-table-column prop="articleDate" label="发布日期" width="200"></el-table-column>
				<el-table-column fixed="right" label="操作" width="180">
					<template slot-scope="scope">
						<el-button @click.native.prevent="viewArticle(scope.row.id)" type="text" size="small">查看</el-button>
						<el-button @click.native.prevent="editArticle(scope.row)" type="text" size="small">编辑</el-button>
						<el-button @click.native.prevent="deleteArticle(scope.row.id)" type="text" size="small">移除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div style="margin: 20px 0 50px 0">
				<el-pagination
					background
					style="float:right;"
					layout="total"
					@current-change="handleCurrentChange"
					:page-size="pageSize"
					:total="articles.length"
				></el-pagination>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	name: 'ArticleManagement',
	data() {
		return {
			articles: [],
			keywords: '',
			form: {
				category: {
					id: '',
					name: ''
				}
			}
		}
	},
	mounted() {
		this.loadArticles()
	},
	computed: {
		tableHeight() {
			return window.innerHeight - 220
		}
	},
	methods: {
		loadArticles() {
			this.$axios.get('/admin/articles').then(resp => {
				if (resp && resp.status === 200) {
					this.articles = resp.data.result
				}
			})
		},

		handleCurrentChange(currentPage) {
			this.currentPage = currentPage
		},
		viewArticle(id) {
			let articleUrl = this.$router.resolve({
				path: '../../pub/news/article',
				query: {
					id: id
				}
			})
			window.open(articleUrl.href, '_blank')
		},
		editArticle(article) {
			this.$router.push({
				name: 'Editor',
				params: {
					article: article
				}
			})
		},
		deleteArticle(id) {
			this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
				.then(() => {
					this.$axios
						.delete('/admin/content/article/' + id)
						.then(resp => {
							if (resp && resp.data.code === 200) {
								this.loadArticles()
							}
						})
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					})
				})
		},
		handleSearch() {
			this.$axios
				.get('/search?keywords=' + this.keywords, {})
				.then(resp => {
					if (resp && resp.data.code === 200) {
						this.articles = resp.data.result
					}
				})
		},
		onSubmit() {
			const cid = this.form.category.id
			const url = 'categories/' + cid + '/article'
			if (cid == 0) {
				this.loadArticles()
			} else {
				this.$axios.get(url).then(resp => {
					if (resp && resp.status === 200) {
						this.articles = resp.data.result
					}
				})
			}
		}
	}
}
</script>

<style scoped>
.add-link {
	margin: 18px 0 15px 10px;
	float: left;
}
</style>
