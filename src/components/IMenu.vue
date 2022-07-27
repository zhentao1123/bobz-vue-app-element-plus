/**
菜单组件
目前至多支持三级菜单
 */
<template>
  <template v-for="(item, idx) in _menuList" :key="item.name">
    <!-- 一级子菜单 -->
    <template v-if="item.children">
      <el-sub-menu :index="idx+''">
        <template #title>
          <el-icon><component :is="item.meta.icon" class="icon"></component></el-icon>
          <!-- <el-icon><location /></el-icon> -->
          <span>{{item.meta.title}}</span>
        </template>
        <template v-for="(subItem, subIdx) in item.children" :key="subItem.name">
          <!-- 二级子菜单 -->
          <template v-if="subItem.children">
            <el-sub-menu :index="idx+''+subIdx">
              <template #title>
                <span>{{subItem.meta.title}}</span>
              </template>
              <template v-for="(subItem2, subIdx2) in subItem.children" :key="subItem2.name">
                <!-- 三级菜单 -->
                <el-menu-item :index="idx+''+subIdx+''+subIdx2">{{subItem2.meta.title}}</el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <!-- 二级菜单 -->
          <template v-else>
            <el-menu-item :index="idx+''+subIdx">{{subItem.meta.title}}</el-menu-item>
          </template>
        </template>
      </el-sub-menu>
    </template>
    <!-- 一级菜单 -->
    <template v-else>
      <el-menu-item :index="idx+''">{{item.meta.title}}</el-menu-item>
    </template>
  </template>
</template>

<script>
import { dynamicMenuList } from '@/router/index'

export default {
  props: {
    menuList: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      msg: 'hello',
      _menuList: []
    };
  },
  created() {
    let self = this;
    self._menuList = self.menuList;
    // console.log('IMenu menuList ====>', JSON.stringify(self.menuList));
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 20px;
  height: 20px;
}
</style>
