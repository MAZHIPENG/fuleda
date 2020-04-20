<template>
  <div class="projects">
    <div class="advantage">
      <div class="title">
        <p>{{$t("message.home.project.advantage")}}</p>
      </div>
      <div class="content">
        <div class="detail">
          <a href target="_blank" rel="about">
            <img src="@/assets/image/home/global.png" />
            <p>{{$t("message.home.project.global")}}</p>
          </a>
        </div>
        <div class="detail">
          <a href target="_blank" rel="about">
            <img src="@/assets/image/home/customize.png" />
            <p>{{$t("message.home.project.customize")}}</p>
          </a>
        </div>
        <div class="detail">
          <a href target="_blank" rel="about">
            <img src="@/assets/image/home/profession.png" />
            <p>{{$t("message.home.project.profession")}}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="title">
        <p>{{$t("message.news.center")}}</p>
      </div>
      <div class="content">
        <div class="news-img">
          <img src="@/assets/image/home/news.jpg" />
        </div>
        <div class="news-article-list">
          <ul>
            <li>
              <p class="link-title">
                <router-link to="/news">{{$t("message.news.center")}}</router-link>
              </p>
            </li>
            <li v-for="(news, i) in newsList" :key="i">
              <p class="time">
                <span>{{news.releaseTime}}</span>
                <router-link
                  class="link-title article"
                  :to="{path:'/newsDetail/'+news.id}"
                >{{news.title}}</router-link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      newsList: [],
      count: 0
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
      // console.log(this.$i18n.locale)
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
  }
};
</script>
<style lang="less" scoped>
.projects {
  text-align: center;
  padding: 10px 160px;
  .title {
    color: #3773dc;
    font-family: 微软雅黑;
    font-size: 30px;
  }
  .advantage {
    .content {
      text-align: center;
      width: 100%;
      display: flex;
      .detail {
        border: 1px solid rgba(240, 240, 240, 1);
        border-radius: 3px;
        margin: 0 auto;
        a {
          display: flex;
          text-align: center;
          padding: 50px;
          img {
            width: 80px;
            height: 80px;
          }
          p {
            margin: auto;
            padding: 0px 10px;
            vertical-align: middle;
            line-height: 140%;
          }
        }
      }
    }
  }
  .news {
    .content {
      .news-img {
        img {
          padding: 8px;
          border: 1px solid rgb(240, 240, 240);
          height: 300px;
          object-fit: cover;
        }
      }
    }
    .news-article-list {
      padding: 10px 160px;
      text-align: left;
      ul {
        margin: 0 auto;
        white-space: nowrap;
        width: 531px;
        li:nth-child(1) {
          p {
            a {
              font-size: 18px;
              color: #3773dc;
            }
            padding-bottom: 20px;
          }
          border-bottom: 1px solid #eee;
        }
        p {
          margin: 0;
          padding: 5px;
        }
        li {
          list-style-type: none;
          display: flex;
          .time {
            span {
              color: #9f9f9f;
              padding-right: 5px;
              font-size: 12px;
              display: inline-block;
              width: 140px;
            }
          }
          .link-title {
            font-size: 14px;
            color: #777676;
          }
        }
      }
    }
  }
}
@media screen and(max-device-width:1200px) {
  .projects {
    padding: 0;
    .news-article-list {
      padding: 0;
    }
  }
}
</style>