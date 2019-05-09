<template>
  <div id="Home">
    <el-container>
      <el-header style="height:101px;">
        <data-header></data-header>
      </el-header>

      <el-container>
        <el-aside style="width:250px;" v-if="flag">
          <data-aside></data-aside>
        </el-aside>

        <el-aside style="width:250px;" v-if="UserFlag">
          <user-aside></user-aside>
        </el-aside>

        <el-aside style="width:250px;" v-if="staffFlag">
          <staff-aside></staff-aside>
        </el-aside>

        <el-main>
          <div class="content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import dataAside from "./views/dataAside.vue";
import dataHeader from "./views/dataHeader.vue";
import Nothing from "./views/Nothing.vue";
import UserAside from "./components/User/UserAside.vue";
import staffAside from "./components/Maintence/staffAside.vue";
import bus from "./bus.js";
import localStorage from './localStorage.js'
export default {
  data() {
    return {
      flag: true,
      UserFlag: false,
      staffFlag: false
    };
  },
  components: {
    dataHeader,
    dataAside,
    UserAside,
    staffAside,
    Nothing
  },
  mounted() {
    const self=this
    // console.log(localStorage.fetch().type)
    const type=localStorage.fetch().type

    // const type = this.$store.state.user.type;
    if (type == "Admin") {
      self.flag = true;
      self.UserFlag = false;
      self.staffFlag = false;
    }
    if (type == "User") {
      // console.log('进来User')
      self.flag = false;
      self.UserFlag = true;
      self.staffFlag = false;
    }
    if (type == "Staff") {
      self.flag = false;
      self.UserFlag = false;
      self.staffFlag = true;
    }
  },
  destroyed() {
    const self=this
    const type = this.$store.state.user.type;
    if (type == "Admin") {
      self.flag = true;
      self.UserFlag = false;
      self.staffFlag = false;
    }
    if (type == "User") {
      self.flag = false;
      self.UserFlag = true;
      self.staffFlag = false;
    }
    if (type == "Staff") {
      self.flag = false;
      self.UserFlag = false;
      self.staffFlag = true;
    }
  }
};
</script>


<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
.el-header {
  background-color: rgb(102, 166, 250);
  color: #333;
  text-align: center;
  line-height: 80px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  color: #333;
  box-sizing: border-box;
  padding: 20px;
  line-height: 0;
}
// .breadcrumb {
//   box-sizing: border-box;
//   padding-top: 10px;
//   padding-bottom: 15px;
//   border-bottom: 1px solid #dddddd;
// }
</style>
   <!-- <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{pathname}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div> -->