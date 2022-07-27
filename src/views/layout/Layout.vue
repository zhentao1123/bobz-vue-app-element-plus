<template>
  <el-container class="container">
    <!-- 头部区域 -->
    <el-header class="header">
      Header
    </el-header>
    <el-container>
      <!-- 左侧区域 -->
      <el-aside :width="menuWidth" class="aside">
        <el-row justify="center" style="flex-grow:1;">
          <el-menu
            default-active="1"
            class="el-menu-vertical"
            :collapse="isCollapse"
            :collapse-transition="isTransition"
            @open="handleOpen"
            @close="handleClose"
          >
            <i-menu :menuList='menuList'/>
            <!--
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
            -->
          </el-menu>
        </el-row>
        <el-row justify="center" style="flex-grow:0;">
          <el-switch v-model="isCollapse" />
        </el-row>
      </el-aside>
      <!-- 内容区域 -->
      <el-main class="main">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {
  Document,
  Menu,
  Location,
  Setting,
} from '@element-plus/icons-vue';
import { dynamicMenuList } from '@/router/index';
import IMenu from '@/components/IMenu.vue';

export default {
  components: {
    IMenu
  },
  data() {
    return {
      isCollapse: true,
      isTransition: false,
      menuList: []
    };
  },
  created(){
    let self = this;
    self.loadMenu();
  },
  methods: {
    handleOpen(key='', keyPath=[]){
      console.log(key, keyPath);
    },
    handleClose(key='', keyPath=[]){
      console.log(key, keyPath);
    },
    loadMenu(){
      let self = this;
      self.menuList = dynamicMenuList;
      // console.log('Layout menuList ====>', JSON.stringify(self.menuList));
    }
  },
  computed: {
    menuWidth(){
      let self = this;
      return self.isCollapse ? '70px' : '200px';
    }
  }
};
</script>

<style lang="scss" scoped>
$menu-bg: lightblue;
.container{
  width: 100%;
  min-height: 100%; height: 100%;
  .header{
    background: orange;
  } 
  .aside{
    height: 100%;
    background-color: $menu-bg;
    overflow-x: hidden;
    overflow-y: hidden;
    .el-menu-vertical:not(.el-menu--collapse) {
      width: 200px;
      height: 100%;
      background-color: $menu-bg;
    }
    .el-menu--collapse{
      width: 70px;
      background-color: $menu-bg;
    }
  }
  .main{
    width: 100%;
    height: 100%;
  }
}


</style>
