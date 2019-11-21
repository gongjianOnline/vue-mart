<template>
    <div class="home">
        <!-- 轮播图 -->
        <cube-slide :data="slider" :interval="5000">
            <cube-slide-item v-for="(item) in slider" :key="item.id">
                <router-link :to="`/detail/${item.id}`"> 
                    <img :src="item.img"  class="">
                </router-link>
            </cube-slide-item>
        </cube-slide>

        <!-- 商品列表 -->
        <goods-list >

        </goods-list>


    </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import GoodsList from "@/components/GoodsList.vue"
export default {
    name: "home",
    components: {
        HelloWorld,
        GoodsList
    },
    data(){
        return{
            slider:[]
        }
    },
    mounted() {
        console.log("打印token")
        localStorage.getItem('token')
        /**获取轮播图 */
        console.log("获取轮播图");
        this.$http({
            methods: "post",
            url: "/api/goods"
        }).then((response) => {
            console.log(response.data);
            let res = response.data;
            this.slider = res.slider;

            console.log(this.slider)
        });

    }
};
</script>
<style scoped>
.cube-slide{
    height: auto
}
.cube-slide-item > a > img{
    width: 100%
} 
</style>
