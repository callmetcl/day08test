import axios from '@/utils/request.js'

export const getArticleListAPI = (_page, _limit) => {
  return axios.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
