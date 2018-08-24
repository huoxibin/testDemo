<!--
* author: huoxibin
* created: 2018/8/23
* describe:
-->
<template>
    <div class="detail">
      详情页:
      {{name}}
      <el-button type="primary" round @click="$router.go(-1)">返回</el-button>
    </div>
</template>

<style lang="scss" scoped>
  .detail{
    width: 100%;
    height: 100%;
    background: $background-color-detail;
  }
</style>

<script>
    export default {
        name: "",
        components: {},
        props: [],
        data() {
            return {
              name:''
            }
        },
        methods: {},
        mounted() {
          let name = this.$route.query.name;
          this.name = name;
        },
        watch: {},
        computed: {},
        activated() {

        }
    }
</script>

