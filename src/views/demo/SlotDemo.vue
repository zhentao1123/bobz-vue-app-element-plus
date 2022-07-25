<template>
  <HelloWorld :plist="olist">
    <template v-slot:title> new title </template> 
    <template v-slot:content="{infoList}">
      <ol>
        <li v-for="item in infoList" :key="item.id">{{ item.age }} {{ item.name }}</li>
      </ol>
    </template>
  </HelloWorld>
</template>

<script>
import HelloWorld from '@/views/demo/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      olist: [{id:1, name:'Jack', age:22}]
    };
  },
  created(){
    console.log('created')
  }
};
</script>

<style>
.box {
  color: blue;
}
</style>
