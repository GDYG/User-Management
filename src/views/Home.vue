<template>
  <div class="home">
    <div class="header">
      用户管理系统
    </div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-table
            :data="tableData"
            stripe
            style="width: 80%">
      <el-table-column
              prop="name"
              label="姓名"
              width="180">
      </el-table-column>
      <el-table-column
              prop="phone"
              label="电话"
              width="180">
      </el-table-column>
      <el-table-column
              prop="address"
              label="地址">
      </el-table-column>
      <el-table-column
              fixed="right"
              label="操作"
              width="120">
        <template slot-scope="scope">
          <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        input: '',
        tableData: [{
          phone: '13546899858',
          name: '张三',
          address: '上海市静安区解放南路 2000 弄'
        }, {
          phone: '18356987596',
          name: '李四',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          phone: '15689563258',
          name: '王小虎',
          address: '北京市海淀区西二旗'
        }, {
          phone: '15455555874',
          name: 'wangle',
          address: '重庆市金沙江路 156 弄'
        }, {
          phone: '15469695874',
          name: 'angle',
          address: '广州市普陀区金沙江路 196 弄'
        }, {
          phone: '15447895874',
          name: 'alan',
          address: '天津市普陀区金沙江路 446 弄'
        }, {
          phone: '15436545874',
          name: 'Joy',
          address: '北京市普陀区金沙江路 16 弄'
        }]
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    mounted() {
      this.$bus.$on('submit', (payLoad) => {
        this.tableData.push(payLoad)
        console.log(this.tableData)
      })
    }
  }
</script>

<style scoped>
  .home {
    padding: 0% 0% 0% 15%;
  }
  .el-input {
    width: 80%;
  }
  .header {
    font-size: 20px;
    color: #000;
    margin-top: 100px;
    margin-bottom: 20px;
  }
</style>