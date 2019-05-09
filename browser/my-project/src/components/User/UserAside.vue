<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu class="el-menu-vertical-demo" default-active="/Home/MyRepair" router>
        <el-menu-item index="/Home/MyRepair">
          <template>
            <i class="el-icon-location"></i>
            <span>我的报修单</span>
          </template>
        </el-menu-item>

        <el-menu-item index="/Home/Repair">
          <template>
            <i class="el-icon-location"></i>
            <span>故障报修</span>
          </template>
        </el-menu-item>

           <el-menu-item index="/Home/ceshiPhoto">
          <template>
            <i class="el-icon-location"></i>
            <span>测试图片</span>
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
