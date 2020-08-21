<template></template>

<script>
export default {}
</script>

<style lang="scss">
// 学科竞赛信息样式
.mtop {
	width: 100%;
	height: auto;
	overflow: hidden;
	padding: 0;
	margin: 0 auto;
	background: #fff;
	position: relative;
}
.title {
	width: 1000px;
	height: auto;
	padding: 0 0 15px;
	margin: 30px auto 20px;
	text-align: center;
	position: relative;
}
.title a {
	font-size: 30px;
	color: #000000;
}
.title a.more {
	float: right;
	font-size: 18px;
}

.title a.more:hover {
	color: orange;
}
.mlist {
	width: 1000px;
	height: 400px;
	overflow: hidden;
	padding: 0;
	margin: 0 auto;
	position: relative;
}
.mlistBox {
	position: relative;
	display: flex;
	justify-content: space-between;
}
.mlist_left {
	width: 270px;
	height: 270px;
	overflow: hidden;
	padding-top: 10px;
	margin-right: 3px;
	/* background: url(../images/mb1.jpg) no-repeat left center; */
	border: 1px solid gainsboro;
	box-shadow: 1px 1px 10px #888888;
	float: left;
	background-size: 100%;
	position: relative;
	transition: all ease-in 0.3s;
}
.mlist_left:hover {
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.mlist_top {
	width: 180px;
	height: 62px;
	overflow: hidden;
	padding: 0;
	margin: 0 auto;
	margin-top: 30px;
	text-align: center;
	position: relative;
}
.mlist_title {
	width: 230px;
	height: 30px;
	overflow: hidden;
	line-height: 30px;
	padding: 0;
	margin: 0 auto;
	text-align: center;
	font-size: 14px;
	font-weight: bold;
	color: #3d3d3d;
	position: relative;
}
.mlist_main {
	width: 220px;
	height: 75px;
	overflow: hidden;
	padding: 5px 0 0;
	margin: 0 auto;
	line-height: 180%;
	color: #656565;
	position: relative;
}
.mlist_ah {
	height: 30px;
	text-align: center;
	font-size: 16px;
}
.letGo {
	width: 110px;
	border-radius: 5px;
	cursor: pointer;
	text-align: center;
	line-height: 36px;
	height: 36px;
	background-color: rgb(231, 101, 88);
	margin: 0 auto;
}
.letGo a {
	font-size: 16px;
	color: #fff;
	font-weight: bold;
}
</style>