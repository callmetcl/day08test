<template>
  <div class="home-container">
    <van-nav-bar title="标题" fixed />
    <!-- 这里拼接articleInfo List -->
    <ArticleInfo v-for="item in artList" :key="item.art_id"></ArticleInfo>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
export default {
  name: 'MyHome',
  data() {
    return {
      page: 1,
      limit: 10,
      artList: []
    }
  },
  components: { ArticleInfo },
  created() {
    this.initArticleList()
  },
  methods: {
    async initArticleList() {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      console.log(res)
      this.artList = res
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px;
  .van-nav-bar {
    background-color: skyblue;
  }
  /deep/ .van-nav-bar__title {
    color: white;
  }
}
</style>
