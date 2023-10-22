<template>
  <div>
    <div class="news-page">
      <div>
        <img :src="news.urlToImage" class="img" alt="news-image" />

        <h5 class="content"><b>Title :</b>{{ news.title }}</h5>
        <p class="content"><b>Author : </b>{{ news.author }}</p>
        <p class="content" v-if="news.content !== null">
          <b>Content : </b>{{ news.content }}
        </p>
        <p class="content" v-if="news.description !== null">
          <b>Description : </b>{{ news.description }}
        </p>
        <p class="content">
          <b>Published On : </b>{{ news.publishedAt | formatDate }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "NewsDetails",
  computed: {
    ...mapGetters(["news"]),
  },
  filters: {
    formatDate: function (value) {
      return moment(value).format("L");
    },
  },
};
</script>
<style scoped>
.img {
  border: 1px solid black;
  width: 70%;
}
.news-page {
  margin: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
