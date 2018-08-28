<template>
  <div class="home">
    <!--header-->
    <v-header></v-header>
    <!--body-->
    <div class="main">
      <el-container>
        <el-aside width="200px">
          <el-button @click="$router.push('index')" type="success">主页按钮</el-button>
          <el-button @click="$router.push('login')" type="success">登陆页</el-button>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
    <!--footer-->
    <v-footer style="position: fixed;bottom: 0;left: 0"></v-footer>
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
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-flow: column wrap;
    .main {
      width: 100%;
      flex: 1;
      display: flex;
      overflow: hidden;
      .el-container{
        width: 100%;
        height: 100%;
        .el-aside {
          background-color: #D3DCE6;
          color: #333;
          height:100%;
          display: flex;
          flex-flow:column wrap;
          justify-content: start;
          .el-button{
            margin: 20px 50px;
            width: 100px;
            height: 50px;
          }
        }
        .el-main {
          background-color: #E9EEF3;
          color: #333;
          height:100%;
          width: 100%;
          padding: 10px;
        }
      }
    }
  }
</style>
