<template>
	<el-container>
		<el-aside style="width: 200px;margin-left: 250px">
			<SideMenu @indexSelect="listByCategory" ref="sideMenu"></SideMenu>
		</el-aside>
		<el-main>
			<Article class="area" ref="booksArea"></Article>
		</el-main>
	</el-container>
</template>

<script>
import SideMenu from '../SideMenu'
import Article from '../article'

export default {
	components: { SideMenu, Article },
	data() {
		return {
			isAll: true
		}
	},
	methods: {
		handleCurrentChange(page) {
			var _this = this
			this.cid = this.$ref.tabs.value
			this.$axios
				.get('/categories/' + this.cid + '/article')
				.then(resp => {
					if (resp && resp.status === 200) {
						_this.articles = resp.data.result
						// _this.total = resp.data.result.totalElements
					}
				})
		},
		listByCategory() {
			const cid = this.$refs.sideMenu.cid
			const url = 'categories/' + cid + '/article'
			this.$axios.get(url).then(resp => {
				if (resp && resp.status === 200) {
					this.$refs.booksArea.articles = resp.data.result
				}
			})
		}
	},
	mounted() {}
}
</script>

<style lang="scss" scoped>
.area {
	width: 990px;
	margin-left: auto;
	margin-right: auto;
}
</style>