<template>
  <div class="top">
    <div class="top-content">
      <div class="top-company">
        <img class="logo-img" src="@/assets/image/logo.png" />
        <div class="company-name">
          <img :src="nameImg" />
        </div>
      </div>
      <div class="top-contact">
        <div class="contact-content">
          <div class="contact-img">
            <img src="@/assets/image/home/phone.png" />
          </div>
          <div class="contact-call">
            <strong>CALL US</strong>
            <div class="contact-number">{{$t("message.contact.callUsPhone1")}}</div>
            <div class="contact-number">{{$t("message.contact.callUsPhone2")}}</div>
          </div>
        </div>
        <div class="contact-content">
          <div class="contact-img">
            <img src="@/assets/image/home/email.png" />
          </div>
          <div class="contact-call">
            <strong>EMAIL US</strong>
            <div class="contact-number">{{$t("message.contact.callUsEmail")}}</div>
          </div>
        </div>
        <div class="top-language">
          <button class="change-language-btn">{{$t("message.home.language")}}</button>
          <div class="change-language-content">
            <a @click="changeLan('zh')" href="#">中文</a>
            <a @click="changeLan('en')" href="#">English</a>
            <a @click="changeLan('ja')" href="#">Japanese</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nameImg: ""
    };
  },

  methods: {
    changeLan: function(lan) {
      this.$i18n.locale = lan;
      this.nameImg = "/static/name/name-" + lan + ".png";
      window.localStorage.setItem("localeLanguage", lan);
      location.reload();
    }
  },
  mounted: function() {
    var lan = this.$i18n.locale;
    this.nameImg = "/static/name/name-" + lan + ".png";
  }
};
</script>

<style lang="less" scoped>
.top {
  .top-content {
    display: flex;
    padding: 10px 160px;
    .top-company {
      margin: auto 0;
      width: 60%;
      display: flex;
      .logo-img {
        width: 80px;
        height: 80px;
      }
      .company-name {
        margin: auto 0;
        display: inline-block;
        img {
          max-width: 60%;
        }
      }
    }
    .top-contact {
      width: 42%;
      display: flex;
      .contact-content {
        display: flex;
        padding: 10px;
        .contact-img {
          margin: auto;
          img {
            width: 32px;
            height: 32px;
          }
        }
        .contact-call {
          color: #e27575;
          padding: 5px;
          strong {
            font: 14px Georgia, "Times New Roman", Times, serif;
          }
          .contact-number {
            color: rgb(67, 67, 67);
            white-space: nowrap;
            font-size: 14px;
          }
        }
      }
    }
    .top-language {
      padding: 10px;
      position: relative;
      display: inline-block;
      z-index: 998;
      margin: auto;
      font-size: 14px;
      .change-language-btn {
        white-space: nowrap;
        background-color: #3773db;
        color: white;
        border: none;
        cursor: pointer;
        padding: 16px;
      }
      .change-language-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        a {
          font-size: 14px;
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }
        a:hover {
          background-color: #f1f1f1;
        }
      }
    }
    .top-language:hover {
      .change-language-btn {
        background-color: #3773bd;
      }
      .change-language-content {
        display: block;
      }
    }
  }
}
</style>