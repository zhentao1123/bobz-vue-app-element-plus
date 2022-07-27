<template>
  <div><h1>Home</h1></div>
  <div><h1>mode : {{mode}}</h1></div>
  <div><h1>base_api_path : {{base_api_path}}</h1></div>
</template>

<script>
export default {
  data(){
    return {
      mode: import.meta.env.MODE,
      base_api_path: import.meta.env.APP_BASE_API_PATH
    }
  },
  mounted(){
    
  }
};
</script>

<style scoped></style>
