<template>
  <div class="app-container">
    <router-view></router-view>

    <van-tabbar route>
      <van-tabbar-item to="/home" icon="home-o">้ฆ้กต</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">ๆ็</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped></style>
