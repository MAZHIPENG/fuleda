<template>
  <div class="introduct">
    <div class="title">
      <p>{{$t("message.home.introduction.aboutUs")}}</p>
    </div>
    <div class="introduction">
      <div class="introduction-content">
        <div class="introduction-title">
          <p>{{$t("message.home.introduction.companyIntr")}}</p>
        </div>
        <div class="introduction-text">
          <p>{{$t("message.home.introduction.intrContent[0].text")}}</p>
          <p>{{$t("message.home.introduction.intrContent[1].text")}}</p>
          <p>{{$t("message.home.introduction.intrContent[2].text")}}</p>
        </div>
      </div>
      <div class="introduction-img">
        <img src="@/assets/image/home/company.jpg" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.introduct {
  padding: 10px 160px;
  background-color: #f6f6f6;
  .title p {
    color: #3773dc;
    font-size: 30px;
    text-align: center;
  }
  .introduction {
    line-height: 16.79px;
    display: flex;
    text-align: left;
    .introduction-content {
      padding: 10px;
      .introduction-title {
        color: rgb(67, 67, 67);
        line-height: 42px;
        font-size: 30px;
      }
      .introduction-text {
        color: rgb(102, 102, 102);
        line-height: 200%;
        font-size: 16px;
      }
    }
    .introduction-img {
      margin: auto;
      img {
        margin: auto 0;
        width: 500px;
        height: 386px;
        object-fit: cover;
      }
    }
  }
}
@media screen and(max-device-width:1200px) {
  .introduct {
    padding: 20px;
    .introduction {
      display: flex;
      flex-direction: column-reverse;
      .introduction-img img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>