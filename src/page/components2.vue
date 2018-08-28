<!--
* author: huoxibin
* created: 2018/8/28
* describe:
-->
<template>
    <div class="">
      <p>测试vuex的组件2</p>
      <p>
        {{myAge}}
      </p>
      <p>
        <el-button type="danger" plain @click="$router.go(-1)">返回</el-button>
      </p>
    </div>
</template>

<script>
    export default {
        name: "",
        components: {},
        props: [],
        data() {
            return {}
        },
        methods: {},
        mounted() {

        },
        watch: {},
        computed: {
          //一般会在组件的计算属性（computed）获取state的数据（因为，计算属性会监控数据变化，一旦发生改变就会响应）
          myAge (){
            return this.$store.state.age;
          }
        },
        activated() {

        }
    }
</script>

<style lang="scss" scoped>

</style>
