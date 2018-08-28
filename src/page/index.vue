<!--
* author: huoxibin
* created: 2018/8/23
* describe:
-->
<template>
    <div class="index">
      这是第二次测试develop分支推向master分支！
      <el-button type="danger" plain @click="$router.push('list')">跳到列表页</el-button>
      <!--<el-button type="danger" plain @click="$router.push('components1')">跳到组件1</el-button>
      <el-button type="danger" plain @click="$router.push('components2')">跳到组件2</el-button>-->
      <el-button type="danger" plain @click="$router.push('components0')">跳到组件0</el-button>
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

