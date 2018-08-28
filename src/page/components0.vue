<!--
* author: huoxibin
* created: 2018/8/28
* describe:
-->
<template>
    <div class="">
      <components1></components1>
      <components2></components2>
    </div>
</template>

<script>
  import components1 from './components1';
  import components2 from './components2';
    export default {
        name: "",
        components: {components1,components2},
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

<style lang="scss" scoped>

</style>
