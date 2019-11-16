<template>
    <!-- 登录认证测试 -->
    <div>
        <cube-form  :model="model" 
                    :schema="schema"
                    @submit="handleLogin"
                    @validate="handlevalidate">
        </cube-form>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            model:{ //数据模型
                username:'',
                password:""
            },
            schema:{ //表单结构模型
                fields:[
                    {
                        type:"input",
                        modelKey:'username',
                        label:"用户名",
                        props:{
                            poaceholder:"请输入用户名"
                        },
                        rules:{ //校验规则
                            required:true
                        },
                        trigger:"blur",
                        messages:{
                            required:"用户名为必填项"
                        }
                    },
                    {
                        type:"input",
                        modelKey:'password',
                        label:"密码",
                        props:{
                            type:"password",
                            poaceholder:"请输入密码",
                            eye:{
                                open:false
                            }
                        },
                        rules:{ //校验规则
                            required:true
                        },
                        trigger:"blur",
                        messages:{
                            required:"密码为必填项"
                        }
                    },
                    { //登录按钮
                        type:"submit",
                        label:"登录"
                    }
                ]
            }
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        handleLogin(e){
            //阻止表单默认事件
            e.preventDefault();
            this.$http({
                methods:'get',
                url:"/api/login",
                params:{
                    name:this.model.username,
                    paw:this.model.password
                }
            }).then((response)=>{
                //登录成功
                if(response.data.code == 101){
                    //缓存值本地
                    localStorage.setItem("token",response.data.token);
                    //存入store
                    this.$store.commit("setToken",response.data.token);
                    let toast = this.$createToast({
                        time:2000,
                        txt:'登录成功',
                        type:'success'
                    });
                    toast.show()
                    //登录成功后回调至该路由
                    let redirect = this.$route.query.redirect || "/";
                    this.$router.push(redirect)
                }else{
                    //登录失败
                    let toast = this.$createToast({
                        time:2000,
                        txt:'登录失败',
                        type:'error'
                    });
                    toast.show()
                }
            })
        },
        handlevalidate(ret){

        }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">

</style>
