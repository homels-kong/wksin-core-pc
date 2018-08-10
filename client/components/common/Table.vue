 <template>
    <el-table
      :data="tableData"
      style="width: 70%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
     <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
            <el-button @click="detail(scope.row)" type="text" size="small">查看</el-button>
        </template>
    </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '张三',
            sex: '男',
            address: '北京市朝阳区三里屯'
          }, {
            date: '2016-05-04',
            name: '李四',
            sex: '男',
            address: '北京市朝阳区三里屯'
          }, {
            date: '2016-05-01',
            name: '王二',
            sex: '男',
            address: '北京市朝阳区三里屯'
          }, {
            date: '2016-05-03',
            name: '麻子',
            sex: '男',
            address: '北京市朝阳区三里屯'
          }]
        }
      },
      methods: {
        detail (row) {
          this.$router.push('/detail')
        }
      }
    }
</script>
<style lang="less" scoped>
  .el-table {
      margin: 0 auto
  }
</style>


