<template>
  
</template>

<script>
import {login} from '@/api/login'

export default {
  data(){
    return {
      formState: {
        username: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    onFinish(){
      let self = this;
      login(
        self.formState, 
        (result)=>{
          console.log('==> login success');
          console.log(JSON.stringify(result));
          self.$router.replace({path:'/', query:{}}); //replace 方法替换当前路由，不能返回
        }, 
        null);
    },
    onFinishFailed(){

    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: space-around; /* Safari 6.1+ */
  display: flex;
	flex-direction: column;
  justify-content: center;
	align-items: center;
  .opt-area{
    width: auto;
    height: 270px; max-height: 270px;
    padding: 50px 60px 20px 50px;
    border-radius: 20px;
    background-color: white;
    display: -webkit-flex; /* Safari */
    -webkit-justify-content: space-around; /* Safari 6.1+ */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>