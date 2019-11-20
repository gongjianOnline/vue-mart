<template>
  <div id="app">
    <!-- vue动画标签 基于css -->
    <transition name="route-move">
      <router-view class="child-view"></router-view>  
    </transition>  

    <!-- 底部导航栏 -->
    <cube-tab-bar v-model="selectLabel" 
                  :data="tabs"
                  show-slider
                  @change="changeHandler"></cube-tab-bar>
  </div>
</template>
<script>
  import {mapGetters} from "vuex"
  export default {
    data(){
      return{
        selectLabel:"/",//默认页签
        tabs:[
          {
            label:"Home",
            icon:"cubeic-home",
            value:"/"
          },
          {
            label:"Carts",
            value:"/cart",
            icon:"cubeic-mall"
          },
          {
            label:"Me",
            value:"/login",
            icon:"cubeic-person"
          }
        ]
      }
    },
    watch:{ 
      //路由发生变化时,tabs样式同步
      $route(route) {
        this.selectLabel = route.path;
      }
    },
    created(){
      //初始化页签的设置(解决页面刷新和路由跳转的导航选中问题)
      this.selectLabel = this.$route.path;
    },
    methods:{
      logout(){
        this.$http({
          methods:'get',
          url:"/api/logout"
        }).then((response)=>{
          console.log("退出测试")
          console.log(response)
        })
      },
      changeHandler(val){
        this.$router.push(val);
      }
    },
    computed:{
      ...mapGetters(['isLogin'])
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.cube-tab-bar{
  position: fixed;
  bottom:0;
  left: 0;
  right: 0;
  background: #edf0f4
}
.cube-tab-bar-slider{
  top:0
}
/* 页面的滑动动画(vue动画设计)*/
/* 入场前 */
.route-move-enter{
  transform: translate3d(-100%,0,0)
}
/* 出场后 */
.route-move-leave-to{
  transform: translate3d(100%,0,0)
}
.route-move-enter-active,
.route-move-leave-active{
  transition: transform 0.3s
}
.child-view{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-bottom: 36px;
}
</style>
