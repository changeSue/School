<template>
	<div class="articles-area">
		<el-card style="text-align: left;width: 990px;margin: 35px auto 0 auto">
			<div>
				<p>
					<strong>{{article.articleTitle}}</strong>
				</p>
				<el-divider content-position="right">{{article.articleDate}}</el-divider>
				<div class="markdown-body">
					<div v-html="article.articleContentHtml"></div>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	name: 'ArticleDetails',
	data() {
		return {
			article: []
		}
	},
	mounted() {
		this.loadArticle()
	},
	methods: {
		loadArticle() {
			var _this = this
			this.$axios.get('/article/' + this.$route.query.id).then(resp => {
				if (resp && resp.data.code === 200) {
					_this.article = resp.data.result
				}
			})
		}
	}
}
</script>

<style scoped>
@import '../../../../styles/markdown.css';
p {
	font-size: 20px;
	text-align: center;
}
</style>
