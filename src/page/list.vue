<!--
* author: huoxibin
* created: 2018/8/23
* describe:
-->
<template>
    <div class="list">
      <el-table :data="tableData4" border width="100%" height="100%">
        <el-table-column prop="doctorName" show-overflow-tooltip label="姓名" align="center" width="100px">
        </el-table-column>
        <el-table-column prop="doctorId" show-overflow-tooltip label="哆咔医生号" align="center" width="120px">
        </el-table-column>
        <el-table-column prop="hospitalName" show-overflow-tooltip label="机构名称" align="center">
        </el-table-column>
        <el-table-column prop="departmentName" show-overflow-tooltip label="科室" align="center">
        </el-table-column>
        <el-table-column prop="teamRole" show-overflow-tooltip label="是否家医" align="center" width="80px">
          <template slot-scope="scope">
            {{scope.row.teamRole === 0 ? '否' : '是'}}
          </template>
        </el-table-column>
        <el-table-column prop="titleName" show-overflow-tooltip label="职称" align="center">
        </el-table-column>
        <el-table-column prop="teamName" show-overflow-tooltip label="家医团队" align="center">
        </el-table-column>
        <el-table-column prop="disable" show-overflow-tooltip label="账号状态" align="center" width="80px">
          <template slot-scope="scope">
                <span v-if="scope.row.disable=== 0"
                      style="font-size: 12px">启用</span>
            <span v-if="scope.row.disable=== 1"
                  style="font-size: 12px;color:red">禁用</span>
          </template>
        </el-table-column>
        <el-table-column prop="checked" show-overflow-tooltip label="认证状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.checked=== 0" style="color:#c7c4c4">资质未提交</span>
            <span v-if="scope.row.checked=== 1" style="color:#ff5133">资质待认证</span>
            <span v-if="scope.row.checked=== 2" style="color:#323232">资质已认证</span>
            <span v-if="scope.row.checked=== -1"  style="color:#ff8653">资质认证失败</span>
          </template>
        </el-table-column>
        <el-table-column prop="uploadTime" show-overflow-tooltip label="认证提交时间" align="center">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="250px">
          <template slot-scope="scope">
            <el-button @click="view(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="stop(scope.row)" type="text" size="small" v-if="scope.row.disable ===0">禁用</el-button>
            <el-button @click="start(scope.row)" type="text" size="small" v-if="scope.row.disable ===1">启用</el-button>
            <el-button @click="find(scope.row)" type="text" size="small" v-if="scope.row.checked ===1">资质认证</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "",
        components: {},
        props: [],
        data() {
            return {
              tableData4: []
            }
        },
        methods: {
          deleteRow(index, rows) {
            rows.splice(index, 1);
          },
          view(row){
            this.$router.push({
              path:'detail',
              query:{
                name:row.name
              }
            })
          },
          //获取列表
          queryList(val){
            this.$get("/data/my", {
              pathL: "/doctor/medical/getDoctorInfoList",
              pageNum:1,//当前页码
              pageSize:20,//每页显示得条数1
            }).then(res => {
              if (res.state === 0) {
                this.tableData4 = res.data.result;
              } else {
                this.$message({
                  message: res.msg,
                  center: true
                });
              }
            })
          },
        },
        mounted() {
          this.queryList();
        },
        watch: {},
        computed: {},
        activated() {

        }
    }
</script>

<style lang="scss" scoped>
  .list{
    width: 100%;
    height: 100%;
    background: $background-color-list;
  }
</style>
