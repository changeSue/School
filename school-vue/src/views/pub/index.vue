<template>
	<div id="home">
		<idx-lunbo />
		<idx-train />
		<idx-news />
		<idx-suc />
		<idx-info />
	</div>
</template>

<script>
import IdxLunbo from '@/components/lunbo'
import IdxInfo from '@/components/info'
import IdxNews from '@/components/news'
import IdxTrain from '@/components/train'
import IdxSuc from '@/components/suc'
export default {
	components: {
		IdxLunbo,
		IdxInfo,
		IdxNews,
		IdxTrain,
		IdxSuc
	},
	name: 'Home',
	data() {
		return {}
	}
}
</script>

<style lang="scss">
</style>