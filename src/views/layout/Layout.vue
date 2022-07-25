<template>
  
  
</template>

<script>
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  data() {
    return {
      selectedKeys1: ['2'],
      selectedKeys2: ['1'],
      collapsed: false,
      openKeys: ['sub1'],
    };
  },
};
</script>

<style>
.header {
  background: #fff;
}
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
