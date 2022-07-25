<template>
  <div class="box">
    <div style="font-weight: bold"><slot name="title">default title</slot></div>
    <div>
      <slot name="content" v-bind:infoList="list">
        <ol>
          <li v-for="item in list" :key="item.id">{{ item.name }} {{ item.age }}</li>
        </ol>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plist: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      list: [{id: 1, name: 'Tom', age: 20 }],
    };
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    let self = this;
    if (self.plist && self.plist.length > 0) {
      self.list = self.plist;
    }
  },
};
</script>

<style>
.box {
  color: blue;
  font-size: 20px;
}
</style>
