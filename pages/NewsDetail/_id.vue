<template>
  <div class="news">
    <div class="news-img">
      <img src="@/assets/image/news/news-01.jpg" />
    </div>
    <div class="content">
      <div class="title">
        <p>{{$t("message.news.center")}}</p>
      </div>
      <div class="article-detail">
        <div class="article-title">{{news.title}}</div>
        <div class="article-source"></div>
        <br />
        <br />
        <div class="article-content" v-html="news.content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      news: []
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
      console.log(this.$i18n.locale);
      axios
        .get(
          `https://www.fuledatech.com:8080/news/get/single?id=${this.$route.params.id}&language=${language}`
        )
        .then(res => {
          this.news = res.data.result;
        });
    }
  },
  mounted: function() {
    console.log('id')
    var language = this.$i18n.locale;
    if (language == "en") {
      language = "English";
    } else if (language == "ja") {
      language = "Japanese";
    } else {
      language = "Chinese";
    }
    console.log(this.$i18n.locale);
    axios
      .get(
        `https://www.fuledatech.com:8080/news/get/single?id=${this.$route.params.id}&language=${language}`
      )
      .then(res => {
        this.news = res.data.result;
      });
  }
};
</script>
<style lang="less" scoped>
.news {
  text-align: center;
  .content {
    padding: 10px 160px;
    .title p {
      color: #3773dc;
      font-size: 30px;
    }
    .article-detail {
      padding: 10px 160px;
      .article-title {
        font-size: 18px;
        color: #434343;
        text-align: center;
      }
      .article-source {
        padding: 10px 0 15px;
        text-align: center;
        margin: 0;
        border-bottom: solid 1px #e5e5e5;
        span {
          padding: 0 15px;
          font-size: 12px;
          color: #5a5a5a;
        }
      }
      .article-content {
        width: 100%;
      }
      .center {
        margin: auto;
        display: block;
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
@media screen and(max-device-width:1200px) {
  .news {
    text-align: center;
    .content {
      padding: 0;
    }
  }
}
</style>