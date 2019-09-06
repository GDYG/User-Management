<template>
  <div class="add">
    <div class="header">
      添加用户
    </div>
    <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent class="form-body">
      <el-form-item label="姓名">
        <el-input v-model="form.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone" clearable></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" clearable></el-input>
      </el-form-item>
      <el-form-item label="学历">
        <el-input v-model="form.education" clearable></el-input>
      </el-form-item>
      <el-form-item label="职业">
        <el-input v-model="form.profession" clearable></el-input>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-input type="textarea" v-model="form.textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Add",
    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          education: '',
          profession: '',
          textarea: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$bus.$emit('submit', this.form)
      }
    }
  }
</script>

<style scoped>
  .add {

  }
  .header {
    font-size: 20px;
    color: #000;
    margin-top: 50px;
    margin-bottom: 20px;
    margin-left: 10%;
  }
 .form-body {
   width: 40%;
   margin-left: 10%;
 }
</style>