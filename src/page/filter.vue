<!--
* author: huoxibin
* created: 2018/9/7
* describe:
-->
<template>
    <div class="">
      <p>{{msg}}</p>
      <h1>{{price}}</h1>
      <h1>{{price | myCurrency('￥')}}</h1>
      <h1>{{name | myTextTransform(false)}}</h1>
      <!-- 将时间戳转化为时间 -->
      <h1>根据时间戳转化为时间1：{{ str | formateTime}}</h1>
    </div>
</template>

<script>
    export default {
        name: "",
        components: {},
        props: [],
        filters: {
          //过滤器函数始终以表达式的值作为第一个参数，带引号的参数视为字符串，而不带引号的参数按表达式计算
          myCurrency(myInput,arg1){
            console.log(myInput);//356
            console.log(arg1);//￥
            var result = arg1+myInput;
            return result;
          },
          /*myCurrency(myInput){
            var result = "$"+myInput;
            return result;
          },*/
          myTextTransform(myInput,isUpper) {
            console.log(myInput);//Huoxibin
            console.log(isUpper);//false
            if(isUpper) {
              return myInput.toUpperCase(); //大写
            } else{
              return myInput.toLowerCase(); //小写
            }
          },
          formateTime:function(nS){
            return ((new Date(nS).getMonth()+1)<10?'0'+(new Date(nS).getMonth()+1):(new Date(nS).getMonth()+1)) + '-' + (new Date(nS).getDate()<10?'0'+new Date(nS).getDate():new Date(nS).getDate()) + ' ' + (new Date(nS).getHours()<10?'0'+new Date(nS).getHours():new Date(nS).getHours()) + ':' + (new Date(nS).getMinutes()<10?'0'+new Date(nS).getMinutes():new Date(nS).getMinutes())
          }

        },
        data() {
            return {
              msg: 'Hello Vue',
              price:356,
              name:'Huoxibin',
              str:1517568434324
            }
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
