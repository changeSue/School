<template>
	<div>
		<el-row style="margin: 18px 0px 0px 18px ">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/admin/content/article'}">文章管理</el-breadcrumb-item>
				<el-breadcrumb-item>编辑器</el-breadcrumb-item>
			</el-breadcrumb>
		</el-row>
		<el-row>
			<el-input
				v-model="article.articleTitle"
				style="margin: 10px 0px;font-size: 18px;"
				placeholder="请输入标题"
			></el-input>
		</el-row>
		<el-row style="height: calc(100vh - 140px);">
			<mavon-editor
				v-model="article.articleContentMd"
				style="height: 100%;"
				ref="md"
				@save="saveArticles"
				fontSize="16px"
			>
				<button
					type="button"
					class="op-icon el-icon-document"
					:title="'摘要/封面'"
					slot="left-toolbar-after"
					@click="dialogVisible = true"
				></button>
				<button
					type="button"
					class="op-icon el-icon-position"
					:title="'时间'"
					slot="left-toolbar-after"
					@click="dialogVisible1 = true"
				></button>
				<button
					type="button"
					class="op-icon el-icon-paperclip"
					:title="'分类'"
					slot="left-toolbar-after"
					@click="dialogVisible2 = true"
				></button>
			</mavon-editor>
			<el-dialog :visible.sync="dialogVisible" width="30%">
				<el-divider content-position="left">摘要</el-divider>
				<el-input
					type="textarea"
					v-model="article.articleAbstract"
					rows="6"
					maxlength="255"
					show-word-limit
				></el-input>

				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
				</span>
			</el-dialog>

			<el-dialog :visible.sync="dialogVisible1" width="30%">
				<el-divider content-position="left">选择发布的时间</el-divider>
				<el-date-picker v-model="article.articleDate" type="date" placeholder="选择日期"></el-date-picker>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible1 = false">取 消</el-button>
					<el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
				</span>
			</el-dialog>
			<el-dialog :visible.sync="dialogVisible2" width="30%">
				<el-form v-model="form" ref="dataForm">
					<el-form-item label="文章分类" prop="cid">
						<el-select v-model="form.category.id" placeholder="请选择分类">
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
				</el-form>
				<el-button @click="dialogVisible2 = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
			</el-dialog>
		</el-row>
	</div>
</template>

<script>
import ImgUpload from './ImgUpload'

export default {
	name: 'Editor',
	components: { ImgUpload },
	data() {
		return {
			article: {},
			dialogVisible: false,
			dialogVisible1: false,
			dialogVisible2: false,
			form: {
				category: {
					id: '',
					name: ''
				}
			}
		}
	},
	mounted() {
		if (this.$route.params.article) {
			this.article = this.$route.params.article
		}
	},
	methods: {
		saveArticles(value, render) {
			// value 是 md，render 是 html
			this.$confirm('是否保存并发布文章?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
				.then(() => {
					this.article.category = this.form.category
					this.$axios
						.post('/admin/content/article', {
							id: this.article.id,
							articleTitle: this.article.articleTitle,
							articleContentMd: value,
							articleContentHtml: render,
							articleAbstract: this.article.articleAbstract,
							articleCover: this.article.articleCover,
							articleDate: this.article.articleDate,
							category: this.article.category
						})
						.then(resp => {
							if (resp && resp.data.code === 200) {
								this.$message({
									type: 'info',
									message: '已保存成功'
								})
							}
						})
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消发布'
					})
				})
		},
		uploadImg() {
			this.article.articleCover = this.$refs.imgUpload.url
		}
	}
}
</script>
