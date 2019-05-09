<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu class="el-menu-vertical-demo" default-active="/Home/index" router>
        <el-menu-item index="/Home/index">
          <template>
            <i class="el-icon-menu"></i>

            <span>首页</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </template>
        </el-menu-item>

        <el-submenu index="/Home/adminList">
          <template slot="title">
            <i class="el-icon-message"></i>数据管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/Home/adminList">管理员列表</el-menu-item>
            <el-menu-item index="/Home/userList">用户列表</el-menu-item>
            <el-menu-item index="/Home/staffList">维修员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="/Home/addUser">
          <template>
            <i class="el-icon-plus"></i>
            <span>添加账号</span>
          </template>
        </el-menu-item>

        <el-menu-item index="/Home/approval">
          <template>
            <i class="el-icon-circle-check"></i>
            <span>审批派单</span>
          </template>
        </el-menu-item>

         <el-menu-item index="/Home/completed">
          <template>
            <i class="el-icon-tickets"></i>
            <span>已完成</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<!--

  有分组的使用 el-submenu 然后在里面使用 el-menu-item-group 进行分组
  没分组的使用 el-menu-item 
-->






<style lang="less">
</style>
