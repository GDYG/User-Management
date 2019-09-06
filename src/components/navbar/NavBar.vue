<template>
  <div class="navbar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item class="item-header">用户管理系统</el-menu-item>
          <el-menu-item index="1" class="item-body" @click="btnClick">主页</el-menu-item>
          <el-menu-item index="2" class="item-body" @click="btnClick1">关于</el-menu-item>
          <el-menu-item index="3" class="item-footer" @click="btnClick2">添加用户</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      btnClick() {
        this.$router.push('/home')
      },
      btnClick1() {
        this.$router.push('about')
      },
      btnClick2() {
        this.$router.push('/add')
      }
    }
  }
</script>

<style scoped>
  .el-menu-demo {
    display: flex;
    justify-content: space-between;
  }
  .item-header {
    font-size: 17px;
  }
</style>