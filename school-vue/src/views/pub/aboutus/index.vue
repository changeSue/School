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

					<!-- 
					<span class="content">{{ article.articleTitle }}</span>
					<span class="date">{{ article.articleDate }}</span>-->
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Abstract',
	data() {
		return {
			articles: []
		}
	},
	methods: {
		loadBooks() {
			const url = 'categories/' + 28 + '/article'
			this.$axios.get(url).then(resp => {
				if (resp && resp.status === 200) {
					this.articles = resp.data.result
				}
			})
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
	},
	mounted: function() {
		this.loadBooks()
	}
}
</script>

<style lang="scss" scoped>
.newstwo_container {
	margin: 10px auto;
	width: 1000px;
	height: 700px;
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