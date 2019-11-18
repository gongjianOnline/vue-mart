<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
  console.log("测试持久化存储")
  console.log(localStorage.getItem('test'))
  console.log(localStorage.getItem('token'))
	/**验证axios拦截器是否生效 */
	console.log("拦截器测试")
    this.$http({
      	methods:'post',
    	url:"/api/goods",
    }).then((response)=>{
		console.log(response)
	});
  }
};
</script>
