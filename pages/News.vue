<template>
  <div class="news">
    <div class="news-img">
      <img src="@/assets/image/news/news-01.jpg" />
    </div>
    <div class="content">
      <div class="title">
        <p>{{$t("message.news.center")}}</p>
      </div>
      <div class="article-list">
        <ul>
          <li v-for="(news, i) in newsList" :key="i">
            <div class="news-time">
              <span class="day">{{news.releaseTime.substring(8,10)}}</span>
              <span class="date">{{news.releaseTime.substring(0,7)}}</span>
            </div>
            <router-link :to="{path:'/newsDetail/'+news.id}">
              <div class="news-title">{{news.title}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="page">
      <a-pagination
        size="small"
        :total="allcount"
        @change="onChange"
        :pageSize="pageSize"
        :defaultCurrent="1"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      newsList: [],
      pageSize: 5,
      allcount: 0
    };
  },
  watch: {
    "$i18n.locale": function() {
      var language = this.$i18n.locale;
      if (language == "en") {
        language = "English";
      } else if (language == "ja") {
        language = "Japanese";
      } else {
        language = "Chinese";
      }
      axios
        .get(
          "https://www.fuledatech.com:8080/news/get?language=" +
            language +
            "&pageNum=1&pageSize=5"
        )
        .then(res => {
          this.newsList = res.data.result;
        });
      axios
        .get("https://www.fuledatech.com:8080/news/get/count?language=" + language)
        .then(res => {
          this.allcount = res.data.result;
        });
    }
  },
  methods: {
    onChange(current, pageSize) {
      var language = this.$i18n.locale;
      if (language == "en") {
        language = "English";
      } else if (language == "ja") {
        language = "Japanese";
      } else {
        language = "Chinese";
      }
      axios
        .get(
          "https://www.fuledatech.com:8080/news/get?language=" +
            language +
            "&pageNum=" +
            current +
            "&pageSize=" +
            pageSize
        )
        .then(res => {
          this.newsList = res.data.result;
        });
      console.log(current, pageSize);
    }
  },
  mounted: function() {
    var language = this.$i18n.locale;
    if (language == "en") {
      language = "English";
    } else if (language == "ja") {
      language = "Japanese";
    } else {
      language = "Chinese";
    }
    axios
      .get(
        "https://www.fuledatech.com:8080/news/get?language=" +
          language +
          "&pageNum=1&pageSize=5"
      )
      .then(res => {
        this.newsList = res.data.result;
      });
    axios
      .get("https://www.fuledatech.com:8080/news/get/count?language=" + language)
      .then(res => {
        this.allcount = res.data.result;
      });
  }
};
</script>
<style lang="less" scoped>
.news {
  text-align: center;
  .page {
    margin: 10px;
  }
  .content {
    padding: 10px 160px;
    .title p {
      color: #3773dc;
      font-family: 微软雅黑;
      font-size: 30px;
    }
    .article-list {
      padding: 10px 160px;
      text-align: left;
      ul {
        list-style-type: none;
        li {
          color: #4d4d4d;
          padding: 20px;
          border-bottom: 1px dotted #dbd4cd;
          display: flex;
          .news-time {
            background: #3773dc;
            width: 60px;
            height: 60px;
            text-align: center;
            .day {
              line-height: 41px;
              color: #fff;
              font-size: 24px;
            }
            .date {
              color: #fff;
              font-size: 12px;
              display: block;
            }
          }
          .news-title {
            padding: 0 10px;
          }
        }
      }
    }
  }
  .news-img {
    text-align: center;
    margin-bottom: 50px;
    img {
      margin: 0 auto;
      display: block;
      height: 300px;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>