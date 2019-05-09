<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <img id="school-logo" class="schoolLogo" src="../assets/校徽.png" alt>
        <p class="college">
          <span id="school_name">广东金融学院</span>
        </p>
        <p class="G-paper">后勤服务中心</p>
      </div>
    </el-col>

    <el-col :span="4" :offset="14">
      <div class="grid-content bg-purple">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="goTo">登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import bus from "../bus.js";
import localStorage from '../localStorage.js'
export default {
  data() {
    return {
      username: localStorage.fetch().username
    };
  },

  methods: {
    goTo() {
      this.$router.push({ path: "/" });
    },
    computed(){
      
    }
  }
};
</script>


<style lang="scss">
.el-row {
  margin-bottom: 20px;
  border-radius: 4px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.schoolLogo {
  min-width: 40px;
  height: 40px;
  float: left;
  margin-left: 25px;
  margin-top: 12px;
  overflow: hidden;
}
#school_name {
  color: white;
}
.college {
  float: left;
  font-size: 26px;
  line-height: 40px;
  font-family: "楷体", "微软雅黑";
  margin-left: 10px;
  margin-top: 12px;
}

.G-paper {
  position: absolute;
  top: 30px;
  margin-left: 25px;
  font-size: 30px;
  font-weight: bold;
  font-family: "楷体", "微软雅黑";
  color: white;
  line-height: 32px;
}
.el-dropdown-link {
  line-height: 101px;
  font-size: 26px;
  font-family: "楷体", "微软雅黑";
  color: white;
}
</style>
