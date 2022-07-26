<template>
  <div>
    <el-container>
      <!-- 头部区域 -->
      <el-header class="header">
        Header
      </el-header>
      <el-container>
        <!-- 左侧区域 -->
        <el-aside width="200px" class="aside">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">expand</el-radio-button>
            <el-radio-button :label="true">collapse</el-radio-button>
          </el-radio-group>
          <el-menu
            default-active="2"
            class="el-menu-vertical"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group>
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><Menu /></el-icon>
              <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 内容区域 -->
        <el-main class="main">
          main
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {
  Document,
  Menu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

export default {
  components: {},
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key='', keyPath=[]){
      console.log(key, keyPath);
    },
    handleClose(key='', keyPath=[]){
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.header{
  background: orange;
}
.aside{
  background: lightblue;
  height: 100%;
}
.main{
  width: 100%;
  height: 100%;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
