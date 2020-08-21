<template>
	<div class="newstwo_container">
		<ul>
			<li v-for="article in articles" :key="article.id" style="padding: 15px 0 15px 0;">
				<a href="#">
					<span class="content" @click="viewArticle(article.id)">{{ article.articleTitle }}</span>
					<span class="date" @click="viewArticle(article.id)">{{ article.articleDate }}</span>
					<!-- 
					<span class="content">{{ article.articleTitle }}</span>
					<span class="date">{{ article.articleDate }}</span>-->
				</a>
			</li>
			<div class="page"></div>
			<el-pagination
				style="padding-left:250px"
				background
				layout="total, prev, pager, next, jumper"
				@current-change="handleCurrentChange"
				:page-size="pagesize"
				:total="articles.length"
			></el-pagination>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Article',
	data() {
		return {
			articles: [],
			currentPage: 1,
			pagesize: 18
		}
	},
	mounted: function() {
		this.loadBooks()
	},
	methods: {
		loadBooks() {
			const url = 'categories/' + 17 + '/article'
			this.$axios.get(url).then(resp => {
				if (resp && resp.status === 200) {
					this.articles = resp.data.result
				}
			})
		},
		handleCurrentChange: function(currentPage) {
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
		}
	}
}
</script>
<style lang="scss" scoped>
.newstwo_container {
	margin: 10px auto;
	width: 1000px;
	height: 500px;
	display: flex;
	justify-content: space-between;

	ul li {
		border-bottom: 1px solid #ffa500;
		margin-right: 10px;
		a {
			display: flex;
			justify-content: start;
			color: #000;
			.content {
				width: 770px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
}
</style>
