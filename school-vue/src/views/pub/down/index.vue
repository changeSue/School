<template>
    <div id="down">
        <ul>
            <li v-for="(item, idx) in downs" :key="idx" style="padding: 10px 0px 10px 10px;border-bottom: 1px solid #FFA500;">
                <a href="#">
                    <span class="content">{{ item.down_content }}</span>
                    <button @click="down">点击下载</button>
                </a>
            </li>
        </ul>
        <page-component :total="downs.length" @pageChange="(item)=>handlePageChange(item)" />
    </div>
</template>

<script>
import PageComponent from '@/components/pagination'
export default {
    components: {
        PageComponent
    },
    data() {
        return {
            downs: [
                {
                    'down_content': '第10届四川省程序设计大赛参考资料第10届四川省程序设计大赛参考资料第10届四川省程序设计大赛参考资料第10届四川省程序设计大赛参考资料'
                },
                {
                    'down_content': '第10届四川省程序设计大赛参考资料'
                },
                {
                    'down_content': '第10届四川省程序设计大赛参考资料'
                },
                {
                    'down_content': '第十届蓝桥杯大赛全国总决赛参赛作品集'
                },
                {
                    'down_content': '第10届四川省程序设计大赛参考资料'
                },
                {
                    'down_content': '第10届四川省程序设计大赛参考资料'
                },
                {
                    'down_content': '第10届四川省程序设计大赛参考资料第10届四川省程序设计大赛参考资料第10届四川省程序设计大赛参考资料第10届四川省程序设计大赛参考资料'
                },
                {
                    'down_content': '第十届蓝桥杯大赛全国总决赛参赛作品集第10届四川省程序设计大赛参考资料第10届四川省程序设计大赛参考资料第10届四川省程序设计大赛参考资料第10届四川省程序设计大赛参考资料第10届四川省程序设计大赛参考资料'
                }
            ]
        }
    },
    methods: {
        down() {
            //下载文件
        }
    },
}
</script>

<style lang="scss" scoped>
#down {
    width: 900px;
    margin: 10px auto;
    ul li {
        display: flex;
        justify-content: space-between;
        a {
            color: #000;
            width: 890px;
            display: inline-block;
            .content {
                width:90%;
                display:inline-block;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            button{
                
            }
        }
        
    }
}
 
</style>