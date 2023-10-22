<template>
  <main>
    <div class="container">
      <div class="container-input">
        <input
          type="text"
          placeholder="Search.."
          v-model="search"
          name="search"
        />
        <button class="search-btn" @click="fetchDataFromApiAction()">
          Search
        </button>
      </div>
      <div class="container-input">
        <label>Country:</label>
        <select v-model="country" @change="fetchDataFromApiAction()">
          <option
            v-for="option in countries"
            v-bind:value="option"
            :key="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <div class="container-input">
        <label>Category:</label>
        <select v-model="category" @change="fetchDataFromApiAction()">
          <option
            v-for="option in categories"
            v-bind:value="option"
            :key="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <div class="container" v-if="filteredNews.length">
      <div class="container-div" v-for="item in filteredNews" :key="item.title">
        <div @click="navigate(item)">
          <img :src="item.urlToImage" class="img-div" alt="news-image" />

          <p class="content"><b>Title : </b>{{ item.title }}</p>
          <p class="content"><b>Author : </b>{{ item.author }}</p>
          <p class="content">
            <b>Published On: </b>{{ item.publishedAt | formatDate }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container">No Data</div>
    </div>
    <div>
      <Pagination
        :currentPage="currentPageNews"
        :totalPages="totalPageNews"
        @previousClick="handlePreviousClick()"
        @nextClick="handleNextClick()"
      ></Pagination>
    </div>
  </main>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "HomeView",
  data() {
    return {
      search: "",
      countries: [
        "ae",
        "ar",
        "at",
        "au",
        "be",
        "bg",
        "br",
        "ca",
        "ch",
        "cn",
        "co",
        "cu",
        "cz",
        "de",
        "eg",
        "fr",
        "gb",
        "gr",
        "hk",
        "hu",
        "id",
        "ie",
        "il",
        "in",
        "it",
        "jp",
        "kr",
        "lt",
        "lv",
        "ma",
        "mx",
        "my",
        "ng",
        "nl",
        "no",
        "nz",
        "ph",
        "pl",
        "pt",
        "ro",
        "rs",
        "ru",
        "sa",
        "se",
        "sg",
        "si",
        "sk",
        "th",
        "tr",
        "tw",
        "ua",
        "us",
        "ve",
        "za",
      ],
      country: "us",
      categories: [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
      ],
      category: "business",
    };
  },
  filters: {
    formatDate: function (value) {
      return moment(value).format("L");
    },
  },
  mounted() {
    this.fetchDataFromApi();
  },
  components: {
    Pagination,
  },
  computed: {
    ...mapGetters(["currentPageNews", "totalPageNews", "filteredNews"]),
  },
  methods: {
    ...mapActions(["getAllNews", "getNewsDetailObject", "getPage"]),
    async handlePreviousClick() {
      await this.getPage("dec");
      this.fetchDataFromApi();
    },
    async handleNextClick() {
      await this.getPage("inc");
      this.fetchDataFromApi();
    },
    fetchDataFromApi() {
      let payload = {
        search: this.search,
        category: this.category,
        country: this.country,
      };
      this.getAllNews(payload);
    },
    async fetchDataFromApiAction() {
      await this.getPage("");
      this.fetchDataFromApi();
    },
    navigate(item) {
      this.getNewsDetailObject(item);
      this.$router.push({ name: "news-deatil" });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.container-div {
  margin: 10px;
  text-align: left;
  width: 400px;
  text-decoration: none;
  overflow: hidden;
  border: 1px solid #f2f8f9;
  background-color: #f2f8f9;
  border-radius: 4px;
}
.container-div:hover {
  border: 1px solid #00838d;
  box-shadow: 0px 0px 300px rgba(255, 255, 255, 0.5);
  z-index: 50;
}
.img-div {
  width: 100%;
  height: 60%;
}
.container-input {
  margin: 10px;
  text-align: center;
}
.content {
  margin: 5px;
}
</style>
