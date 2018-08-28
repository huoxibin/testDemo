<!--
* author: huoxibin
* created: 2018/8/28
* describe:
-->
<template>
    <div class="">
        <p>测试vuex的组件1</p>
        <div>
          <input type="text" v-model="msg" />
          <input type="button" @click="setAge" value="点我" />
        </div>
        <!--<div>
          <el-button type="danger" plain @click="$router.push('components2')">跳到组件2</el-button>
        </div>-->
        <div>
          <el-button type="danger" plain @click="$router.go(-1)">返回</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        components: {},
        props: [],
        data() {
            return {
              msg:''
            }
        },
        methods: {
          setAge(){
            this.$store.commit( 'showAge',this.msg); //在组件1中修改组件2的状态
          }
        },
        mounted() {

        },
        watch: {},
        computed: {},
        activated() {

        }
    }
</script>

<style lang="scss" scoped>

</style>
