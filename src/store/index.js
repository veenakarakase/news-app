import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allNews: [],
    currentPage: 1,
    totalPages: 1,
    filteredNews: [],
    itemsPerPage: 30,
    news: {}
  },
  getters: {
    filteredNews: (state) => {
      return state.allNews;
    },
    currentPageNews: (state) => {
      return state.currentPage;
    },
    totalPageNews: (state) => {
      return state.totalPages;
    },
    news: (state) => {
      return state.news;
    }
  },
  actions: {
    async getAllNews({ commit, state }, payload) {
      let mainUrl = 'https://newsapi.org/v2/top-headlines?';
      let date = moment(new Date()).format('l');
      let queryParamas = `from=${date}&q=${payload.search}&country=${payload.country}&category=${payload.category}&pageSize=30&page=${state.currentPage}&apiKey=49a11d744df34e389a14b1af7494d6a1`;
      fetch(mainUrl + queryParamas)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          commit("setAllNews", data);
        })
        .catch(function () {
          // handle the error
        });
    },
    getPage({ commit }, payload) {
      commit("setCurrentpage", payload);
    },
    getNewsDetailObject({ commit }, payload) {
      commit("setNewsDetails", payload);
    }

  },
  mutations: {
    setAllNews(state, news) {
      state.allNews = news.articles;
      state.totalPages = Math.ceil(news.totalResults / state.itemsPerPage);
    },
    setCurrentpage(state, data) {
      if (data == "inc") {
        state.currentPage += 1;
      } else if (data == "dec") {
        state.currentPage -= 1;
      } else {
        state.currentPage = 1;
      }
    },
    setNewsDetails(state, data) {
      state.news = data;
    }
  }
});

export default store;
