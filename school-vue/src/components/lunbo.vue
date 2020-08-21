<template>
    <div class="carousel" style="width=775px">
        <el-carousel trigger="click" :interval="5000" height="304px">
            <el-carousel-item>
             <img src="../assets/images/index/lunbo1.jpg">
            </el-carousel-item>
         <el-carousel-item>
             <img src="../assets/images/index/lunbo5.jpg">
        </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'lunbo',
    data() {
        return {
            lunbos: [
                {
                    'lunbo_name': '轮播图1',
                    'lunbo_img': '../assets/images/index/dang_new.jpg'
                },
                {
                    'lunbo_name': '轮播图2',
                    'lunbo_img': '../assets/images/index/header.jpg'
                }
            ],
        }
    }
}
</script>


<style lang="scss">
.carousel{
    width: 775px;
    margin-left: 200px;
    background-color: rgb(247, 245, 178);
    img{
    background-size: 100%;
    background-color: rgb(247, 245, 178);
     width: 100%;
  }}
  
