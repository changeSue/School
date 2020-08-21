<template>
	<div id="train">
		<div class="title">
			<a @click="view">学子风采</a>
			<a @click="view" class="more">更多>></a>
		</div>
		<div class="train_container">
			<ul>
				<li v-for="article in articles" :key="article.id" style="padding: 15px 0 15px 0;">
					<a href="#">
						<span class="content" @click="viewArticle(article.id)">{{ article.articleTitle }}</span>
						<span class="date" @click="viewArticle(article.id)">{{ article.articleDate }}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Train',
	data() {
		return {
			articles: []
		}
	},
	mounted: function() {
		this.loadBooks()
	},
	methods: {
		loadBooks() {
			const url = 'categories/' + 25 + '/article'
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
		},
		view() {
			let articleUrl = this.$router.resolve({
				path: '../../pub/student'
			})
			window.open(articleUrl.href, '_blank')
		}
	}
}
</script>

<style lang="scss">
.train_container {
	margin: 10px auto;
	width: 1000px;
	height: 400px;
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
.train_container_lf {
	padding: 20px 0 0 20px;
	width: 88%;
	li {
		padding-bottom: 10px;
		a {
			color: #000;
			width: 90%;
			display: inline-block;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		a:hover {
			color: red;
			text-decoration: underline;
		}
	}
}
.train_container_rg {
	padding: 20px 20px 0 0;
	li {
		height: 25px;
		padding-bottom: 10px;
		a {
			color: #000;
			display: inline-block;
		}
		a:hover {
			color: red;
		}
	}
}
</style>