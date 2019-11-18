<template>
    <div class="home">
        <!-- 轮播图 -->
        <cube-slide :data="slider" :interval="5000">
            <cute-slide-item v-for="(item) in slider" :key="item.id">
                <router-link :to="`/detail/${item.id}`"> 
                    <img :src="item.img" alt="" class="slider">
                </router-link>
            </cute-slide-item>
        </cube-slide>
    </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        HelloWorld
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
            // this.slider = response.slider;
        });

    }
};
</script>
