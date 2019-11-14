module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack:{
    devServer:{
        before(app){
            app.get('/api/goods',function(req,res){
                res.json({
                    code:101,
                    title:"本地虚拟化接口测试",
                    data:{
                        data:[1,2,3,4,5],
                        userID:20
                    }
                })
            })


            app.get('/api/login',function(req,res){
              const {name,paw} = req.query;
              if(name == "admin" && paw == "admin"){
                res.json({
                    code:101,
                    token:'冰山'
                })
              }else{
                res.json({
                    code:102
                })
              }
              
            })
        }
    }
}
}
