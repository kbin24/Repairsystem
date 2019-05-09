<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu class="el-menu-vertical-demo" default-active="/Home/repairOrder" router>
        <el-menu-item index="/Home/repairOrder">
          <template>
            <i class="el-icon-location"></i>
            <span>我的维修单</span>
          </template>
        </el-menu-item>

        <!-- <el-menu-item index="/Home/repairOrder">
          <template>
            <i class="el-icon-circle-check-outline"></i>
            <span>我的维修单</span>
          </template>
        </el-menu-item> -->

        <el-menu-item index="/Home/declare">
          <template>
            <i class="el-icon-location"></i>
            <span>申报材料</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
7