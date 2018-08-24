<!--
* author: huoxibin
* created: 2018/8/23
* describe:
-->
<template>
    <div class="index">
      主页这是测试专用的
      <el-button type="danger" plain @click="$router.push('list')">跳到列表页</el-button>
    </div>
</template>

<style lang="scss" scoped>
  .index{
    width: 100%;
    height: 100%;
    background: $background-color;
  }
</style>

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
        computed: {},
        activated() {

        }
    }
</script>

