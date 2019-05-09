<template>
  <div>
    <el-upload
      class="upload-demo"
      action="http://localhost:3000/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList2"
      list-type="picture"
      name="image"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <!-- <div>
      <img src="../public/image-1555337712255.png" width="300px" height="300px" alt="测试照片">
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList2: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>