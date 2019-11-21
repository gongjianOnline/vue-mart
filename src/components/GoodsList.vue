<template>
    <div class="wrapper">
        <div v-for="item in goods" :key="item.id">
            {{item.title}}
        </div>
    </div>
</template>

<script>
export default {
  components:{},
  props:['goods'],
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){},
  methods:{},
}
</script>
<style scoped>
.wrapper{}
</style>