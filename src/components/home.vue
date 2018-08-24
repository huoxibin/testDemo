<template>
  <div id="home">
    <v-header></v-header>
    <div id="main">
      <el-container>
        <el-aside width="200px">
          <!--<el-button @click="$router.push('list')" type="primary">列表按钮</el-button>-->
          <el-button @click="$router.push('index')" type="success">主页按钮</el-button>
          <!--<el-button @click="$router.push('detail')" type="info">详情按钮</el-button>-->
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from './header'
  import vFooter from  './footer'
export default {
  name: 'HelloWorld',
  components: {vHeader,vFooter},
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped lang="scss">
  #home{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    overflow: hidden;
    flex-flow: column wrap;
    #main {
      width: 100%;
      flex: 1;
    }
  }

  .el-container{
    width: 100%;
    height: 100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height:100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height:100%;
    width: 100%;
    padding: 10px;
  }

</style>
